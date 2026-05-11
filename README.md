# PERAHU 89 Guest House Landing Page

Single-page landing website for PERAHU 89 Guest House in Kerobokan, Bali.

Tagline: Affordable comfort in the heart of Kerobokan.

## Overview

This website is built as a static frontend, ready to deploy to any static hosting provider. It includes room cards, WhatsApp booking links, facilities, gallery, Google Maps location, nearby attractions, testimonials, FAQ, and SEO metadata.

## Project Structure

- `index.html` - main HTML file, SEO metadata, Open Graph tags, schema markup, app root
- `assets/` - logo, room photos, and gallery images
- `src/data.js` - room, gallery, facilities, nearby attractions, and testimonial data
- `src/components/` - separated page sections
- `src/main.js` - page rendering, WhatsApp booking logic, mobile menu, carousel, and lightbox
- `src/styles.css` - responsive design, layout, and interactions
- `robots.txt` - search engine crawler rules
- `sitemap.xml` - sitemap for search engines
- `site.webmanifest` - basic web app manifest

## Run Locally

Serve the project folder with any static server:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Deploy

Upload the full project folder to a static hosting provider such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or shared hosting.

## SEO Deployment Checklist

- Replace every `https://perahu89.com/` value in `index.html`, `robots.txt`, and `sitemap.xml` if the final live domain is different.
- Submit `https://your-domain.com/sitemap.xml` in Google Search Console.
- Create or claim the Google Business Profile for PERAHU 89 Guest House.
- Use the same business name, address, WhatsApp number, and website URL across the website, Google Business Profile, and other listings.
- Add real guest reviews and original property photos over time for stronger local search trust.
- Keep room prices, availability, and contact details accurate.

## Business Details

- Brand: PERAHU 89 Guest House
- Address: Jl. Gn. Tangkuban Perahu No.89, Kerobokan Kelod, Kuta Utara, Badung, Bali 80361
- WhatsApp: +62 858-9569-8689
