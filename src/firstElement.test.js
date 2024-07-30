const firstElement = require('./firstElement')

// (markup, dropCapClass, hiddenTextClass, skipFirstParagraphClass)
const DEFAULT_OPTIONS = ['drop-cap', 'screen-reader-only']
const SIMPLE_HTML = '<p>Text</p>'
const MODERATE_HTML = '<p>Text to process</p>'
const COMPLEX_HTML = '<p><em>Text</em> to process</p>'
const SKIP_CLASS = 'skip'
const SKIP_PARAGRAPH = `<p class="${SKIP_CLASS}">Skip me</p>`

describe('valid first paragraph', () => {
  test('converts html with default options', () => {
    expect(firstElement(SIMPLE_HTML, ...DEFAULT_OPTIONS)).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</p>`)

    expect(firstElement(MODERATE_HTML, ...DEFAULT_OPTIONS)).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
 to process</p>`)

    expect(firstElement(COMPLEX_HTML, ...DEFAULT_OPTIONS)).toBe(`<p><em>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</em> to process</p>`)
  })

  test('converts html with `dropCapClass` override', () => {
    expect(firstElement(SIMPLE_HTML, 'drop-cap-override', 'screen-reader-only')).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</p>`)

    expect(firstElement(MODERATE_HTML, 'drop-cap-override', 'screen-reader-only')).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
 to process</p>`)

    expect(firstElement(COMPLEX_HTML, 'drop-cap-override', 'screen-reader-only')).toBe(`<p><em>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</em> to process</p>`)
  })

  test('converts html with `hiddenTextClass` override', () => {
    expect(firstElement(SIMPLE_HTML, 'drop-cap', 'sr-only')).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
</p>`)

    expect(firstElement(MODERATE_HTML, 'drop-cap', 'sr-only')).toBe(`<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
 to process</p>`)

    expect(firstElement(COMPLEX_HTML, 'drop-cap', 'sr-only')).toBe(`<p><em>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
</em> to process</p>`)
  })
})

describe('skip first paragraph', () => {
  test('converts html with default options', () => {
    expect(firstElement(`${SKIP_PARAGRAPH}${SIMPLE_HTML}`, ...DEFAULT_OPTIONS, SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${MODERATE_HTML}`, ...DEFAULT_OPTIONS, SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
 to process</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${COMPLEX_HTML}`, ...DEFAULT_OPTIONS, SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p><em>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</em> to process</p>`)
  })

  test('converts html with `dropCapClass` override', () => {
    expect(firstElement(`${SKIP_PARAGRAPH}${SIMPLE_HTML}`, 'drop-cap-override', 'screen-reader-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${MODERATE_HTML}`, 'drop-cap-override', 'screen-reader-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
 to process</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${COMPLEX_HTML}`, 'drop-cap-override', 'screen-reader-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p><em>
<span aria-hidden="true">
  <span class="drop-cap-override">T</span>ext
</span>
<span class="screen-reader-only">Text</span>
</em> to process</p>`)
  })

  test('converts html with `hiddenTextClass` override', () => {
    expect(firstElement(`${SKIP_PARAGRAPH}${SIMPLE_HTML}`, 'drop-cap', 'sr-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${MODERATE_HTML}`, 'drop-cap', 'sr-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
 to process</p>`)

    expect(firstElement(`${SKIP_PARAGRAPH}${COMPLEX_HTML}`, 'drop-cap', 'sr-only', SKIP_CLASS)).toBe(`${SKIP_PARAGRAPH}<p><em>
<span aria-hidden="true">
  <span class="drop-cap">T</span>ext
</span>
<span class="sr-only">Text</span>
</em> to process</p>`)
  })
})

describe('invalid first element', () => {
  test('converts html with default options', () => {
    expect(firstElement(`<div>ok</div>${SIMPLE_HTML}`, ...DEFAULT_OPTIONS)).toBe(`<div>ok</div>${SIMPLE_HTML}`)

    expect(firstElement(`<div>ok</div>${MODERATE_HTML}`, ...DEFAULT_OPTIONS)).toBe(`<div>ok</div>${MODERATE_HTML}`)

    expect(firstElement(`<div>ok</div>${COMPLEX_HTML}`, ...DEFAULT_OPTIONS)).toBe(`<div>ok</div>${COMPLEX_HTML}`)
  })

  test('converts html with `dropCapClass` override', () => {
    expect(firstElement(`<div>ok</div>${SIMPLE_HTML}`, 'drop-cap-override', 'screen-reader-only')).toBe(`<div>ok</div>${SIMPLE_HTML}`)

    expect(firstElement(`<div>ok</div>${MODERATE_HTML}`, 'drop-cap-override', 'screen-reader-only')).toBe(`<div>ok</div>${MODERATE_HTML}`)

    expect(firstElement(`<div>ok</div>${COMPLEX_HTML}`, 'drop-cap-override', 'screen-reader-only')).toBe(`<div>ok</div>${COMPLEX_HTML}`)
  })

  test('converts html with `hiddenTextClass` override', () => {
    expect(firstElement(`<div>ok</div>${SIMPLE_HTML}`, 'drop-cap', 'sr-only')).toBe(`<div>ok</div>${SIMPLE_HTML}`)

    expect(firstElement(`<div>ok</div>${MODERATE_HTML}`, 'drop-cap', 'sr-only')).toBe(`<div>ok</div>${MODERATE_HTML}`)

    expect(firstElement(`<div>ok</div>${COMPLEX_HTML}`, 'drop-cap', 'sr-only')).toBe(`<div>ok</div>${COMPLEX_HTML}`)
  })
})
