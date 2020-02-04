const applyDropCap = require('./src/dropCap')

module.exports = function(eleventyConfig, options) {
  eleventyConfig.addFilter('dropcap', content => applyDropCap(content, options))
}
