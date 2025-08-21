# Pixel Nerd — Cyberpunk Pixel-Art Portfolio

A personal website with a nerdy, black-and-green cyberpunk aesthetic. Built with semantic HTML5, responsive CSS Grid/Flexbox, and playful pixel-art animations.

Live URL (after pushing to GitHub Pages): https://moeinomidali.github.io/

## Features
- Pixel-art inspired UI with neon glows and CRT scanlines
- Fully responsive layout (mobile → desktop)
- Animated pixel background, sprite demo, hover and glow micro-interactions
- Retro terminal-style About section with blinking cursor
- Projects grid with CRT-ish preview effect
- Cyberpunk-styled contact form with basic validation
- Accessibility: skip link, visible focus outlines, labels, ARIA where needed
- SEO: meta description, Open Graph/Twitter card, social preview SVG
- 404 page with pixel theme

## Structure
```
assets/
  icons/
    favicon.ico
  images/
    og-card.svg
  scripts/
    main.js
  styles/
    reset.css
    variables.css
    base.css
    animations.css
    a11y.css
index.html
404.html
```

## Local development
Any static server will work. Examples:

- Python 3: `python3 -m http.server 8080`
- Node (serve): `npx serve .`

Then open http://localhost:8080

## Deploy (GitHub Pages)
This repo already looks like a Pages root. To deploy:
1. Commit the changes: `git add -A && git commit -m "feat(site): initial pixel cyberpunk theme"`
2. Push to main: `git push origin main`
3. Ensure GitHub Pages is enabled for the repository (Settings → Pages → Build and deployment → Deploy from branch → main / root)

## Customize
- Colors: edit `assets/styles/variables.css`
- Glow/animations: see `assets/styles/animations.css` and `base.css`
- Content: edit sections in `index.html`
- Social links: update URLs in the Contact section of `index.html`

## Notes
- Images are minimal and generated (SVG). Replace thumbs in Projects with real screenshots if desired.
- For stricter validation, consider integrating a form backend or using a service like Formspree.
- Tested styles should work in all modern browsers; if you find an issue, tweak in `base.css` media queries.
