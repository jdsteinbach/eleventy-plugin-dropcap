const normalizeClassName = require('./normalizeClassName')

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
    expect(normalizeClassName('')).toBe('')
  })

  test('null ', () => {
    expect(normalizeClassName(null)).toBe('')
  })

  test('undefined', () => {
    expect(normalizeClassName(undefined)).toBe('')
  })

  test('object', () => {
    expect(normalizeClassName({a: 32})).toBe('[object Object]')
  })

  test('integer', () => {
    expect(normalizeClassName(33)).toBe('33')
  })

  test('float', () => {
    expect(normalizeClassName(3.2)).toBe('3 2')
  })

  test('empty array', () => {
    expect(normalizeClassName([])).toBe('')
  })

  test('array with empty values', () => {
    expect(normalizeClassName([''])).toBe('')
    expect(normalizeClassName([null])).toBe('')
    expect(normalizeClassName([undefined])).toBe('')
    expect(normalizeClassName([0])).toBe('')
  })
})

describe('string inputs', () => {
  test('single string without period', () => {
    expect(normalizeClassName(STRING_SINGLE)).toBe(STRING_SINGLE)
  })

  test('single string with period', () => {
    expect(normalizeClassName(STRING_SINGLE_PERIOD)).toBe(STRING_SINGLE)
  })

  test('multiple strings without period', () => {
    expect(normalizeClassName(STRING_MULTIPLE)).toBe(STRING_MULTIPLE)
  })

  test('multiple strings with period', () => {
    expect(normalizeClassName(STRING_MULTIPLE_PERIOD)).toBe(STRING_MULTIPLE)
  })

  test('multiple strings mixed', () => {
    expect(normalizeClassName(STRING_MULTIPLE_MIXED)).toBe(STRING_MULTIPLE)
  })
})

describe('array inputs', () => {
  test('array single without period', () => {
    expect(normalizeClassName(ARRAY_SINGLE)).toBe(ARRAY_SINGLE[0])
  })

  test('array single with period', () => {
    expect(normalizeClassName(ARRAY_SINGLE_PERIOD)).toBe(ARRAY_SINGLE[0])
  })

  test('array multiple without period', () => {
    expect(normalizeClassName(ARRAY_MULTIPLE)).toBe('array multiple classes')
  })

  test('array multiple with period', () => {
    expect(normalizeClassName(ARRAY_MULTIPLE_PERIOD)).toBe('array multiple classes')
  })

  test('array multiple mixed', () => {
    expect(normalizeClassName(ARRAY_MULTIPLE_MIXED)).toBe('array multiple classes')
  })
})
