# MTG Standard Staples

Static web app displaying top played Magic: The Gathering Standard tournament cards.

## Stack
- Pure HTML/CSS/JS (no build step)
- Hosted on GitHub Pages
- Card images from Scryfall API (client-side)
- Data sourced from MTGGoldfish

## Files
- `index.html` — Main page
- `style.css` — Styles (dark theme)
- `data.js` — Card and deck data (manually updated)
- `app.js` — Filtering, sorting, search, card preview logic

## Updating Data
To refresh the data, scrape MTGGoldfish's Standard format staples page and metagame page, then update `data.js` with the new card/deck arrays.
