# Namma Rang Painters — Website Launch Package

This is a static HTML website package based on the existing Namma Rang Painters website, expanded for organic Bengaluru SEO.

## What's included
- `index.html` — updated homepage based on your supplied site.
- `services/` — interior painting, exterior painting, waterproofing, cost guide, about and project gallery pages.
- `areas/` — 14 area pages: Electronic City, HSR Layout, BTM Layout, Sarjapur Road, Whitefield, Marathahalli, Bellandur, Varthur, Koramangala, JP Nagar, Jayanagar, Indiranagar, Hebbal and Yelahanka.
- `assets/` — shared subpage styling, analytics configuration and enquiry tracking.
- `sitemap.xml` — XML sitemap template containing the homepage and all included pages.
- `robots.txt` — allows crawling and points to the sitemap.
- `IMAGE-STRATEGY.md` — photography, permission, naming and optimisation plan.
- `GOOGLE-SETUP.md` — domain, hosting, Search Console, Analytics and Business Profile instructions.

## IMPORTANT: before publishing
1. Buy a domain you control. Suggestions to check for availability: `nammarangpainters.in`, `nammarang.in`, `nammarangpainting.com`. These are suggestions only; availability and trademark status have not been checked.
2. Choose one canonical version, e.g. `https://www.yourdomain.in/` or `https://yourdomain.in/`.
3. Replace every `https://YOUR-DOMAIN-HERE` in `index.html`, `services/`, `areas/`, `sitemap.xml` and `robots.txt` with the chosen canonical domain.
4. If the chosen canonical uses `www`, ensure the hosting provider redirects the non-www version to it (or vice versa).
5. Configure the real GA4 Measurement ID in `assets/site-config.js`. Leave it as placeholder until you have created Analytics.
6. Review all prices in the homepage calculator and service cards before launch. They are indicative proposals, not a binding quotation.
7. Confirm the team can actually deliver every listed service and area before publishing.
8. Keep the "online operations" wording. Do not add the former CMH Road address or a virtual office address.
9. Do not publish unverified claims, fake reviews, fabricated project photos, unconfirmed warranty or applicator claims, or unverified opening hours.
10. Have a qualified person check local legal, tax, safety and insurance requirements for the business.

## Important note about area pages
All 14 pages are included as editable drafts. The first four (Electronic City, HSR Layout, BTM Layout and Sarjapur Road) are included in the sitemap as the initial locality pages. The remaining 10 are marked `noindex,follow` and are intentionally excluded from the sitemap until you add useful, unique local information, genuine coverage details and ideally project evidence. When a draft is ready, remove its `noindex` tag and add its URL to `sitemap.xml`.

## How to preview
Open `index.html` in a browser. For local testing with working relative links, serve the folder with any static file server rather than opening files individually. No build step is required.

## Hosting
Upload the contents of this folder (not the outer folder) to the public web root of a static host or hosting account. Ensure HTTPS is enabled and all pages are publicly accessible.

## Contact details included
- Suddala Sunny: +91 96861 03787 / WhatsApp `919686103787`
- Manoj Kumar: +91 76250 04895 / WhatsApp `917625004895`

No physical office address is displayed. The contact section says online operations in Bengaluru and that a physical office address will be announced later.
