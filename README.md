# Family Tree — شجرہ نسب

An interactive, pan/zoom family-tree (shajra) viewer rendered in the browser. Bilingual
Urdu / roman-English node cards, collapsible branches, search, and PNG/JSON/print export.

## Files

- `shajra-linked-tree.html` — markup / page structure
- `styles.css` — all styling
- `script.js` — tree data, layout, rendering, pan/zoom, search and export logic

## Usage

Open `shajra-linked-tree.html` in any modern browser. Keep the three files in the same
folder, since the HTML links `styles.css` and `script.js` by relative path.

### Features
- Pan (drag), zoom (wheel / pinch / zoom dock), and **Fit** to screen
- Tap a person to see details and their line back to the top
- Fold/unfold any branch via the amber circle under a card
- Search by Urdu or roman name
- Export the full tree as PNG or JSON, or print
- Toggle reading direction (RTL / LTR)
