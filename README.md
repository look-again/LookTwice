# LookTwice — Project Documentation

LookTwice is a quiet, cinematic editorial website built as a static, hand‑crafted HTML/CSS/JS project. It is designed to feel like a curated object rather than a feed — slow, intentional, typographically driven, and emotionally grounded. The site emphasizes clarity, whitespace, and rhythm, with minimal dependencies and no build tools.

This README provides everything needed to understand, maintain, and deploy the project.

---

## 1. Project Philosophy

LookTwice is built around a few core principles:

* **Simplicity over complexity**: No frameworks, no build steps, no CMS. Just HTML, CSS, and a tiny amount of JavaScript.
* **Editorial calm**: Large type, generous spacing, and a cinematic hero image set the tone.
* **Longevity and ownership**: The site is fully static and can be hosted anywhere. No subscriptions, no lock‑in.
* **Ease of maintenance**: Adding a new article requires duplicating a single file — nothing else.
* **Atmosphere over features**: The site is intentionally minimal, with subtle animations and restrained use of color.

---

## 2. Tech Stack

* **HTML5** — page structure
* **CSS3** — layout, typography, animations
* **JavaScript (vanilla)** — nav scroll behavior, marquee duplication, newsletter placeholder
* **Buttondown** — optional newsletter integration
* **Netlify** — hosting + automatic deploys from GitHub
* **GitHub** — version control + source of truth

No frameworks, bundlers, or dependencies.

---

## 3. File Structure

looktwice/
├─ index.html
├─ article.html
├─ archive.html
├─ manifesto.html
├─ themes.html
├─ contact.html
├─ styles.css
├─ script.js
├─ assets/
│  ├─ hero.jpg
│  └─ favicon.png (optional)
└─ README.md

### Page Overview
* **index.html** — homepage with hero, marquee, featured writings, manifesto preview, themes, newsletter
* **article.html** — template for individual essays
* **archive.html** — chronological list of all writings
* **manifesto.html** — editorial “about” page
* **themes.html** — three conceptual lenses
* **contact.html** — minimal contact page
* **styles.css** — full design system
* **script.js** — nav scroll logic, marquee duplication, newsletter placeholder

---

## 4. How to Add a New Article

This workflow is intentionally simple and stable.

1. Duplicate `article.html`
2. Rename it to something like: `tenderness.html`
3. Update:
    * The `<title>`
    * The `<h1>`
    * The metadata line
    * The article content
4. Add the article to:
    * `archive.html`
    * Optionally the homepage featured section

No layout, CSS, or JS changes required.

---

## 5. Newsletter Integration (Buttondown)

Buttondown is a lightweight, privacy‑respecting email tool that fits the tone of LookTwice.

### Steps
1. Create a Buttondown account.
2. Go to Settings → Embeds.
3. Copy your form action URL.
4. Replace the newsletter form in `index.html`:

<form class="newsletter"
      action="https://buttondown.email/api/emails/embed-subscribe/YOURNAME"
      method="post"
      target="popupwindow">

That’s it — no JavaScript required.

---

## 6. Local Preview

You can preview the site in any of these ways:

* **Option A — Open the HTML files directly**: Double‑click `index.html`.
* **Option B — Use CodePen**: Copy/paste HTML, CSS, and JS.
* **Option C — Use a local server (optional)**: Run `python3 -m http.server` and visit `http://localhost:8000`.

---

## 7. Deploying via GitHub → Netlify

### Step 1 — Create a GitHub Repository
1. Go to GitHub and create a new repo named `looktwice`.
2. Upload all project files.
3. Commit to `main`.

### Step 2 — Connect to Netlify
1. Go to Netlify.
2. Click Add new site → Import from GitHub.
3. Select your `looktwice` repo.
4. Set Build command to blank and Publish directory to `/`.
5. Deploy.

---

## 8. Custom Domain Setup (Optional)

If you own a domain:
1. In Netlify → Domain Settings, add custom domain.
2. Update DNS at your registrar with Netlify’s CNAME and A records.

---

## 9. Editing the Hero Image

Replace `assets/hero.jpg` with your chosen image. Ensure the filename matches the <img> tag in `index.html`:

<img src="assets/hero.jpg" alt="Hero image" />

---

## 10. Accent Color Usage

The accent color #FFC300 is used sparingly:
* Navigation subscribe button
* Inline manifesto/theme links
* Marquee separators
* Tiny brand dot

---

## 11. Accessibility Notes

* All images include alt text.
* Color contrast meets WCAG AA.
* Navigation is keyboard‑friendly.
* Animations are subtle and non‑distracting.

---

## 12. Future Enhancements (Optional)

* Add a “reading time” script.
* Add a dark/light toggle.
* Add a simple JSON file to auto‑generate the archive.
* Add OpenGraph metadata for social sharing.
* Add a favicon.

---

## 13. License

This project is personal and not intended for redistribution. You may adapt or modify it for your own use.
