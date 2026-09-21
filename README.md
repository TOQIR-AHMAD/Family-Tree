<div align="center">

# 🌳 Family Tree — شجرہ نسب

### Our family, in the browser: a shajra you can read, search and print

Bilingual **Urdu / roman-English** · list and tree views · tap for details · **A4-ready PDF**

<br/>

<img alt="HTML5"      src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img alt="CSS3"       src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img alt="No build"   src="https://img.shields.io/badge/Zero_dependencies-1d6b4f?style=for-the-badge" />

<br/><br/>

<a href="https://toqir-ahmad.github.io/Family-Tree/"><img alt="Live demo" src="https://img.shields.io/badge/%F0%9F%8C%90_View_live_demo-24292f?style=for-the-badge" /></a>

**Live:** https://toqir-ahmad.github.io/Family-Tree/

</div>

---

## ✨ Features

| | |
|---|---|
| 📋 **List · فہرست** | The whole family as an outline, elders first. Tap ▸ to open a person's children, tap a name for details. Phones open in this view. |
| 🌳 **Tree · شجرہ** | The same family drawn as a tree. It runs sideways so it fits the screen width and scrolls down like a page; a top-down layout is available in *More*. Zoom with the labelled buttons, a pinch, or Ctrl + scroll. |
| 👤 **Details · تفصیل** | Generation, children, descendants, the father, the children, and the whole line back to the elders. Every name is tappable. |
| 🔎 **Search** | Type an Urdu or roman name. Matches light up, the list filters itself, and a results list jumps to anyone. |
| 🖨️ **A4 export** | **PDF for A4 printing** lays the tree on A4 sheets and moves large branches to their own page, cross-referenced with *p.N* tags. **PDF, one A4 sheet** fits everything on one page in small type. **Print** uses the same pages. |
| 💾 **Other exports** | Full-tree **PNG** image and the raw **JSON** data. |
| 🌗 **Options** | Dark mode, tree layout (sideways / top-down) and reading direction (RTL / LTR), all remembered. |

**Shortcuts:** `/` search · `Esc` close · `L` list · `T` tree · `+` `−` zoom · `0` fit · `E` expand all · `C` collapse · `?` tips

---

## 📁 Files

| File | Role |
|------|------|
| [`index.html`](index.html) | Markup / page structure |
| [`styles.css`](styles.css) | All styling, light and dark themes, print rules |
| [`script.js`](script.js) | Tree data, both layouts, list view, details, search, A4 pagination &amp; export |

---

<details>
<summary><b>🎨 Design notes</b></summary>

<br/>

A white page with a warm family palette: heritage green for the living line, gold for the elders,
warm browns for text and rules, and a muted colour for each generation. Names are set in
*Noto Nastaliq Urdu*, roman names and headings in *Lora*, and the labels are bilingual so the
family can read it either way. The A4 export is drawn on a canvas and written into a hand-built
PDF, so the site still has no dependencies.

</details>

---

<div align="center">
<sub>Built with plain HTML, CSS &amp; JavaScript · ہمارا خاندان · شجرہ نسب</sub>
</div>
