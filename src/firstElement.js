const cheerio = require('cheerio')

const normalizeClassName = require('./normalizeClassName')
const selectorFromClasses = require('./selectorFromClasses')

const firstElement = (markup, dropCapClass, hiddenTextClass, skipFirstParagraphClass) => {
  const $ = cheerio.load(markup)

  skipFirstParagraphClass = selectorFromClasses(skipFirstParagraphClass)

  const firstParagraph = skipFirstParagraphClass
    ? $(`p${skipFirstParagraphClass}:first-child + p`)
    : $('p:first-child')

  const firstWord = firstParagraph.text().split(' ')[0]

  if (!firstWord) {
    return markup
  }

  const firstLetter = firstWord.match(/\w/i)

  if (!firstLetter || firstLetter.index !== 0) {
    return markup
  }

  const wrappedFirstWord = `
<span aria-hidden="true">
  <span class="${normalizeClassName(dropCapClass)}">${firstLetter[0]}</span>${firstWord.slice(1)}
</span>
<span class="${hiddenTextClass}">${firstWord}</span>
`

  return markup.replace(firstWord, wrappedFirstWord)
}

module.exports = firstElement
