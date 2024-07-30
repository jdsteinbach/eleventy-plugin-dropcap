const selectorFromClasses = require('./selectorFromClasses')

const STRING_SINGLE = 'string-single-class'
const STRING_SINGLE_PERIOD = '.string-single-class'
const STRING_MULTIPLE = 'string multiple classes'
const STRING_MULTIPLE_PERIOD = '.string .multiple .classes'
const STRING_MULTIPLE_MIXED = '.string multiple .classes'
const ARRAY_SINGLE = ['array-single-class']
const ARRAY_SINGLE_PERIOD = ['.array-single-class']
const ARRAY_MULTIPLE = ['array', 'multiple', 'classes']
const ARRAY_MULTIPLE_PERIOD = ['.array', '.multiple', '.classes']
const ARRAY_MULTIPLE_MIXED = ['array', '.multiple', 'classes']

describe('empty inputs', () => {
  test('empty string', () => {
    expect(selectorFromClasses('')).toBe('')
  })

  test('null ', () => {
    expect(selectorFromClasses(null)).toBe('')
  })

  test('undefined', () => {
    expect(selectorFromClasses(undefined)).toBe('')
  })

  test('object', () => {
    expect(selectorFromClasses({a: 32})).toBe('.[object.Object]')
  })

  test('integer', () => {
    expect(selectorFromClasses(33)).toBe('.33')
  })

  test('float', () => {
    expect(selectorFromClasses(3.2)).toBe('.3.2')
  })

  test('empty array', () => {
    expect(selectorFromClasses([])).toBe('')
  })

  test('array with empty values', () => {
    expect(selectorFromClasses([''])).toBe('')
    expect(selectorFromClasses([null])).toBe('')
    expect(selectorFromClasses([undefined])).toBe('')
    expect(selectorFromClasses([0])).toBe('')
  })
})

describe('string inputs', () => {
  test('single string without period', () => {
    expect(selectorFromClasses(STRING_SINGLE)).toBe(STRING_SINGLE_PERIOD)
  })

  test('single string with period', () => {
    expect(selectorFromClasses(STRING_SINGLE_PERIOD)).toBe(STRING_SINGLE_PERIOD)
  })

  test('multiple strings without period', () => {
    expect(selectorFromClasses(STRING_MULTIPLE)).toBe('.string.multiple.classes')
  })

  test('multiple strings with period', () => {
    expect(selectorFromClasses(STRING_MULTIPLE_PERIOD)).toBe('.string.multiple.classes')
  })

  test('multiple strings mixed', () => {
    expect(selectorFromClasses(STRING_MULTIPLE_MIXED)).toBe('.string.multiple.classes')
  })
})

describe('array inputs', () => {
  test('array single without period', () => {
    expect(selectorFromClasses(ARRAY_SINGLE)).toBe('.array-single-class')
  })

  test('array single with period', () => {
    expect(selectorFromClasses(ARRAY_SINGLE_PERIOD)).toBe('.array-single-class')
  })

  test('array multiple without period', () => {
    expect(selectorFromClasses(ARRAY_MULTIPLE)).toBe('.array.multiple.classes')
  })

  test('array multiple with period', () => {
    expect(selectorFromClasses(ARRAY_MULTIPLE_PERIOD)).toBe('.array.multiple.classes')
  })

  test('array multiple mixed', () => {
    expect(selectorFromClasses(ARRAY_MULTIPLE_MIXED)).toBe('.array.multiple.classes')
  })
})
