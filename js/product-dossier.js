/* ==========================================================================
   CueForge Labs — Forge Field Manual behaviour
   Progressive enhancement only. Every route is fully readable, navigable and
   evidence-complete with this file absent or blocked.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  function prefersReduced() {
    return !!reduceMotion.matches;
  }

  function slice(list) {
    return Array.prototype.slice.call(list);
  }

  /* ----------------------------------------------- chapter deck scroll-spy */

  function initDeck() {
    var deck = document.querySelector('.deck-list');
    if (!deck) return;

    var chapters = slice(deck.querySelectorAll('a[href^="#"]'));
    if (!chapters.length) return;

    var targets = chapters
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        var el = id ? document.getElementById(id) : null;
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    if (!targets.length) return;

    var currentEntry = null;

    function setCurrent(entry) {
      if (entry === currentEntry) return;
      currentEntry = entry;
      targets.forEach(function (t) {
        if (t === entry) {
          t.link.setAttribute('aria-current', 'true');
        } else {
          t.link.removeAttribute('aria-current');
        }
      });
      keepVisible(entry);
    }

    // Keep the active chapter reachable inside the horizontally scrolling deck.
    function keepVisible(entry) {
      if (!entry) return;
      var control = entry.link;
      var deckBox = deck.getBoundingClientRect();
      var box = control.getBoundingClientRect();
      if (box.left >= deckBox.left && box.right <= deckBox.right) return;
      var delta = box.left - deckBox.left - (deckBox.width - box.width) / 2;
      if (typeof deck.scrollBy === 'function') {
        deck.scrollBy({
          left: delta,
          behavior: prefersReduced() ? 'auto' : 'smooth'
        });
      } else {
        deck.scrollLeft += delta;
      }
    }

    function syncFromScroll() {
      var bar = document.querySelector('.deck');
      var offset = (bar ? bar.getBoundingClientRect().height : 72) + 28;
      var active = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.getBoundingClientRect().top - offset <= 0) {
          active = targets[i];
        }
      }
      // At the very bottom the final chapter wins even if it is short.
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
  }

  /* -------------------------------------------------- section energizing */

  function initEnergize() {
    var sections = slice(document.querySelectorAll('.energize'));
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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* -------------------------------------------------------- detail lenses */

  /* Each lens shows a CSS-cropped region of an accepted screenshot. The
     toggle swaps between that detail and the whole accepted frame. No pixel
     is redrawn and no additional product state is implied; the button is
     revealed only when this script runs, so the crop stays honest without JS. */
  function initLenses() {
    slice(document.querySelectorAll('[data-lens-toggle]')).forEach(function (btn) {
      var lens = btn.closest ? btn.closest('.lens') : null;
      var frame = lens ? lens.querySelector('[data-lens]') : null;
      if (!frame) return;

      var detailLabel = btn.getAttribute('data-label-detail') || 'Full frame';
      var fullLabel = btn.getAttribute('data-label-full') || 'Show detail';

      btn.hidden = false;
      btn.textContent = detailLabel;
      btn.setAttribute('aria-pressed', 'false');

      btn.addEventListener('click', function () {
        var showingFull = frame.classList.toggle('is-full');
        btn.setAttribute('aria-pressed', showingFull ? 'true' : 'false');
        btn.textContent = showingFull ? fullLabel : detailLabel;
      });
    });
  }

  /* ----------------------------------------------------------------- boot */

  function boot() {
    initDeck();
    initLenses();
    if (prefersReduced()) {
      slice(document.querySelectorAll('.energize')).forEach(function (s) {
        s.classList.add('is-live');
      });
    } else {
      initEnergize();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
