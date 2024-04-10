# Pretty Qualtrics 💅🏻🫦

Currently, Qualtrics offers a suite of layouts with predefined styles and JS-triggered behaviors that support 
particular UI designs. However, as an opinionated researcher always looking to optimize surveys for behavioral 
research, I have taken the liberty to customize my survey designs to fit my needs.

## Layouts

Qualtrics offers four layout options:
 *   `Simple` (Recommended)
 *   `Flat`
 *   `Modern`
 *   `Classic`

Of these, the `Simple` layout is recommended primarily for accessibility reasons while the other three are offered 
as sort of legacy alternatives. While I strongly prefer the `Simple` layout for both accessibility and aesthetic
reasons, I have previously encountered some issues when working with custom JS. Here, I have reverse-engineered the front-end through custom CSS and JS to reproduce the visual and experiential elements of this design by redesigning the `Flat` layout.

I will be actively adding cosmetic modifications to the `Simple` design as a continuation of this project.

## Instructions

To ✨prettify✨ your `Flat` Qualtrics survey, you'll simply need to import my custom CSS and JS into your 
survey HTML header. Navigate to `Look and Feel > General > Header > edit`, then press `Source` button in the
rich text editor to edit the content of the header in raw HTML. Then, you can paste the following two lines:

```html
<script src="https://cdn.jsdelivr.net/gh/1nathanliang/pretty-qualtrics/scripts/script.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/1nathanliang/pretty-qualtrics/public/style.css" rel="stylesheet" />
```

...and that's it! Please note that you should specify a package version number including `@x.y.z` in the links 
above corresponding to `major.minor.patch` in the [releases](https://github.com/1nathanliang/pretty-qualtrics/releases). For example, to specify the current version, use `@0.0.1`:

```html
<script src="https://cdn.jsdelivr.net/gh/1nathanliang/pretty-qualtrics@0.0.0/scripts/script.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/1nathanliang/pretty-qualtrics@0.0.0/public/style.min.css" rel="stylesheet" />
```