<div align="center">

# 🌳 Family Tree — شجرہ نسب

### An interactive, pan &amp; zoom family-tree (shajra) viewer for the browser

Bilingual **Urdu / roman-English** cards · collapsible branches · live search · light &amp; dark themes · **A4-ready PDF** export

<br/>

<img alt="HTML5"      src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img alt="CSS3"       src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img alt="No build"   src="https://img.shields.io/badge/Zero_dependencies-0f766e?style=for-the-badge" />

<br/><br/>

<a href="https://toqir-ahmad.github.io/Family-Tree/"><img alt="Live demo" src="https://img.shields.io/badge/%F0%9F%8C%90_View_live_demo-24292f?style=for-the-badge" /></a>

**Live:** https://toqir-ahmad.github.io/Family-Tree/

</div>

---

## ✨ Features

| | |
|---|---|
| 🖱️ **Navigate** | Drag to pan, scroll or pinch to zoom, **Fit** to screen. Generation labels stay pinned to the left edge as you move. |
| 👤 **Inspect** | Tap a person for a details sheet: generation, children, descendants, father, and their line back to the top. Every name in the sheet is tappable. |
| 🌿 **Fold** | The tree opens four generations deep. Tap the **+N** pill under a card to unfold that branch, the arrow to fold it again. |
| 🔎 **Search** | Type an Urdu or roman name. Matches light up on the tree and a results list lets you jump to anyone (arrow keys + Enter). |
| 🖨️ **A4 export** | **Save PDF · A4 pages** lays the tree sideways on A4 sheets and moves large branches to their own page, cross-referenced with *p.N* tags. **A4 single sheet** fits everything on one page in small type. **Print** uses the same pages. |
| 💾 **Other exports** | Full-tree **PNG** image and the raw **JSON** data. |
| 🌗 **Theme** | Follows the system light/dark setting; toggle it from the header or the menu. |
| ↔️ **Direction** | Toggle reading direction (**RTL / LTR**) of the tree. |

**Shortcuts:** `/` search · `Esc` close · `+` `−` zoom · `0` fit · `E` expand all · `C` collapse · `?` tips

---

## 📁 Files

| File | Role |
|------|------|
| [`index.html`](index.html) | Markup / page structure |
| [`styles.css`](styles.css) | All styling, light and dark themes, print rules |
| [`script.js`](script.js) | Tree data, layout, rendering, pan/zoom, search, A4 pagination &amp; export logic |

---

<details>
<summary><b>🎨 Design notes</b></summary>

<br/>

A calm, paper-toned canvas with a faint dot grid keeps the focus on the names. Cards pair
*Noto Nastaliq Urdu* for the Urdu name with a small tracked-out roman name in *Inter*; the top of
the tree is marked in gold and the selected line in teal. Faint bands and pinned labels mark each
generation. The A4 export is drawn on a canvas and written into a hand-built PDF, so the site still
has no dependencies.

</details>

---

<div align="center">
<sub>Built with plain HTML, CSS &amp; JavaScript · شجرہ نسب</sub>
</div>
