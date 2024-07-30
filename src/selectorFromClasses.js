const selectorFromClasses = classes => {
  if (!classes) return ''

  classes = Array.isArray(classes)
    ? classes
    : classes.toString().split(/[,\s\.]/)

  classes = classes.filter(c => c).map(c => `.${c.replace('.', '')}`)

  return classes.join('')
}

module.exports = selectorFromClasses
