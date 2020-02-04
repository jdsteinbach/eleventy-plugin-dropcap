const firstElement = require('./firstElement')

const dropCap = (text, options) => {
  options = {
    className: 'first-letter',
    ...options
  }

  const { className } = options
  return firstElement(text, className)
}

module.exports = dropCap
