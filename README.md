# MTG Standard Staples

A web app showing the most played cards in Magic: The Gathering Standard tournaments, with their associated deck archetypes.

## Features

- **Top 50 cards** sorted by tournament play percentage
- **Metagame decks** — click any deck to highlight its key cards
- **Filter by card type** — Creatures, Instants, Sorceries, Enchantments, Artifacts, Planeswalkers
- **Search** — find any card instantly
- **Card preview** — hover over a card name to see the card image (via Scryfall)
- **Sort options** — by % of decks, average copies, or alphabetically
- **Responsive** — works on mobile and desktop

## Data Source

Card data is sourced from [MTGGoldfish](https://www.mtggoldfish.com/format-staples/standard) Standard format staples and metagame pages.

## Setup

No build step needed. Just open `index.html` in a browser, or deploy to any static hosting.

For GitHub Pages: push to a repo and enable Pages from Settings > Pages > Source: main branch.

## Updating Data

Edit `data.js` with fresh data from MTGGoldfish's Standard format staples and metagame pages.
