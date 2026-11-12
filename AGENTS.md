# Ruby's Kitchen Rewind website: rules for AI helpers

A plain static site: hand-written HTML, one `styles.css`, one small `site.js`, photos in `images/`. There is no build step. Netlify publishes the `main` branch as it is to https://rubys-rewind.netlify.app.

People also edit these pages with Ruby's Rewind Editor, a desktop app that edits what's inside `<main>` in place. Keep the page structure it relies on:

- Every page keeps a single `<main>` ... `</main>`. The header, menu (`<nav class="nav">`) and footer are outside `<main>` and are repeated in all five pages (`index.html`, `recipes.html`, `about.html`, `gallery.html`, `contact.html`). If you change one, change all five the same way.
- Recipes (`recipes.html`): each recipe is an `<article class="recipe" id="...">` inside `<div class="wrap">`, with this layout: `.recipe-photo` with the `<img>`, then `.eyebrow` (category), `<h2>` (name), `p.meta` (info line), a description `<p>`, `.recipe-cols` holding the Ingredients `<ul>` and Instructions `<ol>`, and `.tip` (`<strong>Ruby Tip</strong><em>...</em>`). Ingredient group headings are `<li class="group">Name:</li>`. Each recipe has a link in `.jump` at the top whose `href` is `#` + the article id.
- Gallery (`gallery.html`): photos are `<figure><img ... loading="lazy"><figcaption>...</figcaption></figure>` inside `.gallery`.
- New pages: copy an existing page so the head, header, menu and footer match, and add the page to the menu in every page.

Style:

- Keep the look: the colors and fonts are CSS variables at the top of `styles.css`. Reuse them and the existing classes before adding new ones.
- No frameworks, build tools, npm packages or extra JavaScript libraries. Plain HTML and CSS.
- Photos go in `images/` as `.jpg`, about 1600 px on the long side and under 400 KB, with a lowercase-hyphenated name and a real `alt` text.
- Ruby's voice: warm, short, a little funny, plain words. Don't invent family stories or facts about Ruby; leave a clear `TODO:` note in the request instead.

Working:

- Make changes on a branch and open a pull request with a one-line summary of what changed and why. Netlify adds a preview link to the pull request; the change goes live only when it's merged.
- Keep each pull request to one idea, so it can be approved or turned down on its own.
- Never commit passwords, API keys or private contact details.
