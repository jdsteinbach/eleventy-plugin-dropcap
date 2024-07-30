const firstElement = require('./firstElement')

const dropCap = (text, options) => {
  options = {
    dropCapClass: 'drop-cap',
    hiddenTextClass: 'screen-reader-only',
    skipFirstParagraphClass: undefined,
    ...options
  }

  const { dropCapClass, hiddenTextClass, skipFirstParagraphClass } = options

  return firstElement(text, dropCapClass, hiddenTextClass, skipFirstParagraphClass)
}

module.exports = dropCap
