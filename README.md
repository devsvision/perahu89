# PERAHU 89 Guest House Landing Page

Static single-page landing website for PERAHU 89 Guest House in Kerobokan, Bali.

## Structure

- `index.html` - SEO metadata, schema markup, app root
- `assets/` - logo and local assets
- `src/data.js` - rooms, gallery, facilities, attractions, testimonials
- `src/components/` - separated page sections
- `src/styles.css` - responsive styling and interactions

## Run Locally

Serve the folder with any static server:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Deploy

Upload the full folder to any static hosting provider such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or shared hosting.

## SEO Deployment Checklist

- Replace every `https://perahu89.com/` value in `index.html`, `robots.txt`, and `sitemap.xml` with the final live domain if the domain is different.
- Submit `https://your-domain.com/sitemap.xml` in Google Search Console.
- Create or claim the Google Business Profile for PERAHU 89 Guest House and use the same address, phone number, and website URL.
- Add real guest reviews and original property photos over time for stronger local search trust.
- Keep room prices and availability accurate so search visitors do not bounce after clicking.
