const firstElement = require('./firstElement')

const dropCap = (text, opts) => {
  let { className } = {
    className: 'first-letter',
    ...opts
  }

  return firstElement(text, className)
}

module.exports = dropCap
