const normalizeClassName = className => {
  className = Array.isArray(className)
    ? className
    : className.split(',')

  return className.join(' ')
}

module.exports = normalizeClassName
