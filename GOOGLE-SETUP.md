# Google and domain launch checklist

## 1. Domain
- Choose and register a domain with a registrar in your own/business control.
- Enable auto-renew, two-factor authentication and domain privacy if available.
- Decide whether the canonical URL uses `www`.
- Point DNS to your chosen hosting provider and enable HTTPS.
- Do not buy a virtual office address to create a Google listing.

## 2. Hosting and launch
- Upload the contents of this package to the hosting public root.
- Test homepage, every service page, all 14 area pages, contact links and the mobile layout.
- Confirm that the site is accessible over HTTPS.
- Replace all domain placeholders before launch.
- Remove pages from the sitemap if you decide not to publish them yet.

## 3. Google Search Console
1. Open https://search.google.com/search-console/
2. Add the domain property (recommended) and verify ownership using the DNS TXT record supplied by Google.
3. Open URL Inspection and test the homepage and important service pages.
4. Submit `https://YOUR-DOMAIN-HERE/sitemap.xml` after replacing the domain.
5. Check indexing and sitemap status periodically.
6. Use Performance > Search results to review queries, impressions, clicks and pages.
7. Request indexing for a small number of important new pages after publishing; this is not a guarantee of indexing or ranking.

## 4. Google Analytics 4
1. Open https://analytics.google.com/
2. Create a GA4 property and a web data stream for the final domain.
3. Copy the Measurement ID (format `G-XXXXXXXXXX`).
4. Replace `GA4_MEASUREMENT_ID` in `assets/site-config.js` with your actual ID.
5. Test real-time data and events.
6. Check events: `whatsapp_click`, `phone_click` and `lead_whatsapp_handoff`.
7. Do not treat a WhatsApp click as a confirmed lead or sale. Record the actual enquiry, site visit, quotation and job separately.

## 5. Google Business Profile — eligibility decision first
Google allows a service-area profile for businesses that travel to customers and provide services at their locations. If Namma Rang's own team travels to customer homes to perform painting, this may fit a service-area business. If it is strictly an online-only lead-generation business and no in-person customer service is provided, it is not eligible.

If eligible:
- Create one profile for the genuine business.
- Use the real-world business name: Namma Rang Painters.
- Select the most accurate primary category available (likely Painter); choose only categories that accurately describe the business.
- Hide the address if customers are not served at that address.
- Add only areas the team can genuinely serve.
- Use a phone number under the business's direct control.
- Complete Google's verification.
- Upload genuine team and work photos.
- Keep hours accurate; do not invent 7-day hours.
- Do not create separate profiles for each Bangalore locality.
- Do not add keywords to the business name.
- Do not buy reviews or offer incentives for positive reviews.

Official guidelines:
https://support.google.com/business/answer/3038177

## 6. Local SEO
- Keep business name and phone details consistent across the website and genuine business profiles.
- Initially publish the four locality pages included in the sitemap. Keep the other locality drafts `noindex` until you can add unique local value; then remove `noindex` and add the URL to the sitemap.
- Add project photos and customer-approved details as actual jobs are completed.
- Ask each real customer for honest feedback after project completion; never script the rating.
- Build local relationships and earn relevant mentions/links naturally.

## 7. Monthly review
Record:
- Search Console impressions and clicks by query/page.
- Organic sessions in Analytics.
- WhatsApp clicks and phone clicks.
- Enquiries received and their source.
- Site visits, quotations, jobs won and revenue.
- Localities and services that generate qualified enquiries.

Google does not guarantee indexing, local placement or a Top 5 position. Local results can vary by searcher's location and are influenced by relevance, distance and prominence.
