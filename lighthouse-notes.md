Lighthouse & Mobile Optimization Checklist
=========================================

Critical checks to run locally (Chrome DevTools > Lighthouse, throttle to Fast 3G & 4x CPU slowdown):

1) Performance
- LCP: Ensure hero-1024.webp preloads; keep text visible.
- Use WebP sources with PNG fallback (done via CSS image-set and hero preload).
- Consider further compressing images if scores < 90.
- Ensure no layout shifts: check CLS near hero text.
- Minimize main-thread work: Tailwind CDN is fine; defer heavy scripts (none used).

2) Accessibility
- Color contrast: verify gold on dark (AA/AAA acceptable). Adjust via Tailwind if needed.
- Keyboard nav: focus states present; ensure Telegram button focus ring visible (done).
- aria-label on Telegram link (done). Decorative SVG has aria-hidden (done).

3) Best Practices
- HTTPS, valid sizes, no mixed content (GitHub Pages is HTTPS).
- No deprecated APIs.

4) SEO
- Title, meta description present (done).
- Meaningful headings and landmarks (header, section, footer) (done).

Manual Visual QA
- Check iPhone SE, iPhone 14 Pro, Pixel 5, Pixel 7 widths.
- Verify parallax smoothness; disable if prefers-reduced-motion.
- Ensure text legibility over all backgrounds.

If scores are low:
- Reduce image quality by ~5–10% and re-export.
- Consider reducing blur/shadow intensity on mobile.
- Remove background-attachment: fixed on very low-end devices if stutter appears.
