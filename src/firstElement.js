const normalizeClassName = require('./normalizeClassName')

const firstElement = (markup, className) => {
  const firstWordSearch = markup.match(/^<p(?:[^>]*)>(\w*)\b[<"'\s]/i)

  if (firstWordSearch && firstWordSearch.length > 1) {
    const firstWord = firstWordSearch[1]
    const wrappedFirstWord = `
      <span aria-label="${firstWord}">
        <span aria-hidden="true">
          <span class="${normalizeClassName(className)}">${firstWord.slice(0,1)}</span>${firstWord.slice(1)}
        </span>
      </span>
    `
    return markup.replace(firstWord, wrappedFirstWord)
  }

  return markup
}

module.exports = firstElement
