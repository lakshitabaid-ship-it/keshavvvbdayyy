# Happy 19th Birthday, Keshav!

A responsive, multi-page birthday website built with HTML, CSS and vanilla JavaScript. Designed for GitHub Pages.

## Pages
- `index.html` — animated intro, birthday homepage and navigation
- `gallery.html` — 20 portrait photo frames with hover captions and click-to-open detail popup
- `dossier.html` — five animated scrapbook chapter cards
- `letters.html` — 11 envelopes with an opening animation and vintage letter reveal
- `style.css` — all visual styling and responsive layouts
- `script.js` — interactions and sample content

## Publish on GitHub Pages
1. Create a new public GitHub repository.
2. Upload the contents of this folder (not the ZIP itself).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish your site.

## Add Keshav's cut-out portrait
- Prepare a transparent PNG containing only his head/face (no shoulders or body).
- Name it exactly `keshav-head.png`.
- Upload it into the `assets` folder.
- The homepage already references `assets/keshav-head.png`. The birthday hat is a CSS animation layered over the image.

## Add the 20 gallery photos
Upload portrait-oriented images into `assets/photos/` using these exact filenames:
`photo-01.jpg` through `photo-20.jpg`.

The gallery already displays 20 designed placeholders until each matching photo is uploaded. Captions and image paths are configured in `script.js` in the `galleryItems` array.

## Replace the sample dossier copy
Open `script.js` and edit the `chapters` object. Each chapter has a `label`, `kicker`, `title`, `text` and `hint`.

## Replace the 11 letter samples
Open `script.js` and edit the `letters` array. Each entry has:
- `sender`: the person's name (revealed only after opening the envelope)
- `body`: the letter text

The envelope fronts intentionally do not show the sender's name.

## Notes
- The site uses Google Fonts, so an internet connection is needed for the chosen fonts. System fallbacks are included.
- No music or external JavaScript libraries are used.
- The intro animation appears once per browser tab session; refreshing after it has played will skip it.
- For best results, use a transparent-background portrait PNG with the head centred and a little space above it for the animated hat.
