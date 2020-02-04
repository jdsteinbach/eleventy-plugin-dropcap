const applyDropCap = require('./src/dropCap')

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('dropcap', (content, opts) => applyDropCap(content, opts))
}
