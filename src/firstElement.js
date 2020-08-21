const cheerio = require('cheerio')

const normalizedropCapClass = require('./normalizeClassName')

const firstElement = (markup, dropCapClass, hiddenTextClass) => {
  const $ = cheerio.load(markup)

  const firstWord = $('p:first-child').text().split(' ')[0]

  if (!firstWord) {
    return markup
  }

  const firstLetter = firstWord.match(/\w/i)

  if (!firstLetter || firstLetter.index !== 0) {
    return markup
  }

  const wrappedFirstWord = `
    <span aria-hidden="true">
      <span class="${dropCapClass}">${firstLetter[0]}</span>${firstWord.slice(1)}
    </span>
    <span class="${hiddenTextClass}">${firstWord}</span>
  `

  return markup.replace(firstWord, wrappedFirstWord)
}

module.exports = firstElement
