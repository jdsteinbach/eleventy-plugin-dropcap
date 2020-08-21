# Eleventy Plugin: Drop Cap

## Purpose

Creates a `dropcap` filter for Eleventy templates.

**The filter works when the following is true:**
- First element in rendered markup is `<p>`
- First element begins with a word (not punctuation)

**The filter does two things:**

- Wraps the first letter of the first word in a `span` with class `first-letter` (or a class you specify)
- Wraps the entire first word (which has now been split and will be read poorly by screen readers) in a span with an `aria-label` that allows screen readers to read the first word "normally"

For more information on the pattern used here, watch Ethan Marcotte's short video, "[Creating Beautiful and Accessible Drop Caps](https://thegymnasium.com/take5/creating-beautiful-and-accessible-drop-caps)" or read the transcript included at that page.

## Installation

### Node Module

```sh
npm i --save eleventy-plugin-dropcap
```

### Eleventy Config

In `.eleventy.js`

```js
const pluginDropcap = require('eleventy-plugin-dropcap')

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginDropcap)
  // Other code
}
```

## Options

You can change the classes used by passing in an options object with `dropCapClass` and `hiddenTextClass` values.

```js
eleventyConfig.addPlugin(pluginDropcap, {
  dropCapClass: 'first-letter',
  hiddenTextClass: 'sr-only'
})
```

Either class value can be a **string** or an **array of strings**.

The default values are:

| Key | Value |
|---|---|
| `dropCapClass` | `drop-cap` |
| `hiddenTextClass` | `screen-reader-only` |

### Template Usage

In Nunjucks:

```njk
{{ content | dropcap | safe }}
```

In Liquid:

```liquid
{{ content | dropcap }}
```

## Styles

You'll need to have your own CSS to style the dropcap as you like.

You'll need to have CSS to correctly style the visually hidden (screen-reader-only) text as well. I recommend this [CSS pattern for visually hidden text](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#hiding-content-visually):

```css
.screen-reader-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```
