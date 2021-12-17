<h1 style="text-align:center;font-variant:small-caps;">gradient-holding</h1>

Based on another page that spins a gradient in a holding pattern.

Removed jQuery, popper, Google Font call, fullscreen on double click, a div, and some styling.

`styles.css` and `main.js` contain the same code inlined to `index.max.html`; `index.html` is the minified version.

`$ stat --prinf="%s"` run on both files shows about 900 bytes saved through minifying.

`favicon.ico` is an empty file, added to remove the console warning from browsers that 404 after requesting it.