/* ==========================================================================
   CueForge Labs — Forge Instrument Dossier behaviour
   Progressive enhancement only. Every product route is fully readable and
   navigable with this file absent or blocked.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener: null };

  function prefersReduced() {
    return !!reduceMotion.matches;
  }

  /* ---------------------------------------------------- subnav scroll-spy */

  function initSubnav() {
    var nav = document.querySelector('.subnav-links');
    if (!nav) return;

    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var targets = links
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        var el = id ? document.getElementById(id) : null;
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    if (!targets.length) return;

    function setCurrent(entry) {
      targets.forEach(function (t) {
        if (t === entry) {
          t.link.setAttribute('aria-current', 'true');
        } else {
          t.link.removeAttribute('aria-current');
        }
      });
    }

    function syncFromScroll() {
      var subnav = document.querySelector('.dossier-subnav');
      var offset = (subnav ? subnav.getBoundingClientRect().height : 56) + 24;
      var active = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.getBoundingClientRect().top - offset <= 0) {
          active = targets[i];
        }
      }
      // At the very bottom the last chapter wins even if it is short.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        active = targets[targets.length - 1];
      }
      setCurrent(active);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        syncFromScroll();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    syncFromScroll();

    // Keep the active chip visible inside the horizontally scrolling row.
    nav.addEventListener('click', function (event) {
      var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
      if (!link) return;
      setCurrent(
        targets.filter(function (t) {
          return t.link === link;
        })[0]
      );
    });
  }

  /* ------------------------------------------------- section energizing */

  function initEnergize() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.energize'));
    if (!sections.length) return;

    if (!('IntersectionObserver' in window)) {
      sections.forEach(function (s) {
        s.classList.add('is-live');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-live');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ------------------------------------------------------------- gallery */

  function initGallery(root) {
    var stageImg = root.querySelector('[data-gallery-image]');
    var captionEl = root.querySelector('[data-gallery-caption]');
    var stateEl = root.querySelector('[data-gallery-state]');
    var thumbs = Array.prototype.slice.call(root.querySelectorAll('.gallery-thumb'));
    var prevBtn = root.querySelector('[data-gallery-prev]');
    var nextBtn = root.querySelector('[data-gallery-next]');

    if (!stageImg || thumbs.length < 1) return;

    var index = Math.max(
      0,
      thumbs.findIndex(function (t) {
        return t.getAttribute('aria-selected') === 'true';
      })
    );

    function show(next) {
      if (!thumbs.length) return;
      index = (next + thumbs.length) % thumbs.length;
      var thumb = thumbs[index];

      stageImg.setAttribute('src', thumb.getAttribute('data-full') || '');
      stageImg.setAttribute('alt', thumb.getAttribute('data-alt') || '');
      if (captionEl) captionEl.textContent = thumb.getAttribute('data-caption') || '';
      if (stateEl) stateEl.textContent = thumb.getAttribute('data-state') || '';

      thumbs.forEach(function (t, i) {
        t.setAttribute('aria-selected', i === index ? 'true' : 'false');
        t.setAttribute('tabindex', i === index ? '0' : '-1');
      });
    }

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () {
        show(i);
      });
    });

    root.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(index + 1);
        thumbs[index].focus();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(index - 1);
        thumbs[index].focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        show(0);
        thumbs[index].focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        show(thumbs.length - 1);
        thumbs[index].focus();
      }
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        show(index - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        show(index + 1);
      });
    }

    // Touch: horizontal swipe on the stage. Tapping thumbnails always works,
    // so this is an addition rather than a drag-only requirement.
    var startX = null;
    var startY = null;
    var stage = root.querySelector('.gallery-stage') || stageImg;

    stage.addEventListener(
      'touchstart',
      function (event) {
        if (event.touches.length !== 1) return;
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
      },
      { passive: true }
    );

    stage.addEventListener(
      'touchend',
      function (event) {
        if (startX === null) return;
        var touch = event.changedTouches[0];
        var dx = touch.clientX - startX;
        var dy = touch.clientY - startY;
        startX = null;
        startY = null;
        if (Math.abs(dx) < 42 || Math.abs(dx) < Math.abs(dy)) return;
        show(dx < 0 ? index + 1 : index - 1);
      },
      { passive: true }
    );

    show(index);
  }

  function initGalleries() {
    Array.prototype.slice
      .call(document.querySelectorAll('[data-gallery]'))
      .forEach(initGallery);
  }

  /* ----------------------------------------------------------------- boot */

  function boot() {
    initSubnav();
    initGalleries();
    if (!prefersReduced()) {
      initEnergize();
    } else {
      Array.prototype.slice.call(document.querySelectorAll('.energize')).forEach(function (s) {
        s.classList.add('is-live');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
