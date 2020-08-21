const firstElement = require('./firstElement')

const dropCap = (text, options) => {
  options = {
    dropCapClass: 'drop-cap',
    hiddenTextClass: 'screen-reader-only',
    ...options
  }

  const { dropCapClass, hiddenTextClass } = options

  return firstElement(text, dropCapClass, hiddenTextClass)
}

module.exports = dropCap
