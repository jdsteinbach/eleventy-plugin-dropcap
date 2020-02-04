# Eleventy Plugin: Drop Cap

Creates a `dropcap` filter for Eleventy templates.

The filter works when the following is true:
* First element in rendered markup is `<p>`
* First element begins with word (not punctuation)

The filter does two things:

* Wraps the first letter of the first word in a `span` with class `first-letter`
* Wraps the entire first word (which has been split and would be read poorly by screen readers) in a span with an `aria-label` that gives screen readers the ability to read the first word "normally"

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

### Template Usage

In `dropcap.njk`

```njk
{% content | dropcap %}
```

## Options
