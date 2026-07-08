# CuePack Pricing Model Website Copy Draft

Status: Phase 5B approved for publication by Steve on 2026-07-08; exact dollar pricing, Stripe, and app billing remain out of scope.
Repo: `stevefoster-dev/cueforge-labs-website`
Branch: `draft/cuepack-pricing-model-2026-07-08`
Live site target: `https://cueforgelabs.com/cuepack.html`

## Draft objective

Update the public CuePack website language so it reflects the new pricing architecture without leaking unapproved exact prices.

This draft intentionally uses model language instead of final dollar amounts:

- Account membership
- Active production packs
- Truck scale add-ons / packs
- Support and onboarding scope
- Standby / archive mode
- Quote/custom handling for arena, stadium, steel-heavy, enterprise, and complex onboarding

## Current draft copy direction

### Hero

**Primary pricing label:**

> Membership + Production Packs

**Supporting line:**

> Account continuity, active productions, truck scale add-ons, support/onboarding, and standby/archive mode

**CTA:**

> Get Pricing →

### Pricing model section

**Lead paragraph:**

> CuePack is priced around how productions actually work: keep the account and archive alive between shows, then scale active work by production count, truck complexity, support/onboarding needs, and standby/archive status.

**Public buckets:**

1. **Account Membership** — Solo PM to Organization
   - Membership covers workspace continuity, seats, permissions, collaboration depth, and support expectations.
   - Examples: Solo / PM, production teams, Touring Pro operations, Organization/custom accounts.

2. **Active Production Packs** — Pay when a show is active
   - A production is active when it is being planned, packed, advanced, shared, exported, rehearsed, shipped, or executed.
   - Includes active production blocks, crew/vendor collaboration, live manifests, and exports.

3. **Truck Scale Add-Ons** — Scale by logistics complexity
   - Truck scale is added per active production instead of forcing the wrong account tier.
   - Covers Small / Standard / Large / Arena / Stadium / custom logistics.

4. **Support & Onboarding** — Add the right level of help
   - Setup, import, workflow design, training, and show-specific support can be scoped separately from software access.

5. **Standby / Archive** — Stay ready between shows
   - Keeps archives, templates, rosters, docs, and account continuity available.
   - Active work requires active billing.

**Closing note:**

> Exact plan pricing is set by account tier, active production count, truck scale add-ons, support/onboarding scope, and standby/archive status. Large arena, stadium, steel-heavy, and enterprise deployments are quoted.

## Files touched in draft

- `cuepack.html`
  - Replaced Coming Soon / suite-language pricing with pricing-model language.
  - Added `id="pricing"` anchor.
  - Removed beta checkout-style CTA hooks from CuePack pricing CTAs.
  - Changed structured data offer from `$0` preorder to limited-availability URL-only offer.

- `products.html`
  - Updated CuePack product card pricing teaser.
  - Updated broad footer claim from “No Subscriptions. No Cloud. Your Tools.” to language that does not contradict CuePack’s subscription/collaboration model.

- `software-circuit.html`
  - Updated CuePack card description and price teaser.
  - Linked CuePack card directly to `cuepack.html#pricing`.

## Approval gates before Phase 5B

Steve approved Phase 5B publication on 2026-07-08 with these confirmations:

- [x] Approve public phrase “Membership + Production Packs.”
- [x] Approve public phrase “Standby / Archive.”
- [x] Include truck scale add-on pricing language.
- [x] Include support/onboarding pricing language.
- [x] Publish model language without exact dollar amounts for now.
- [x] Use CTA language: “Get Pricing” / “Contact Us.”
- [x] Keep CuePack independent from suite-page positioning for now.
- [ ] Later: decide whether `suite.html` gets updated/de-emphasized in Phase 5C cleanup.

## Not included yet

These are intentionally held for later approval:

- exact dollar pricing
- Stripe product/price changes
- checkout links
- public README pricing changes
- CuePack app billing/entitlement enforcement
- deeper legacy suite-page cleanup beyond removing CuePack-specific contradictions
