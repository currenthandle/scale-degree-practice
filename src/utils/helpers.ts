import {
  FRET_SPAN_RATIO,
  NUM_FRETS,
  NUM_STRINGS,
  STRING_SPAN_RATIO,
} from './constants'

export function getFretSpan(width: number) {
  return width * FRET_SPAN_RATIO
}

export function getStringSpan(height: number) {
  return height * STRING_SPAN_RATIO
}

export function getFretOffset(width: number) {
  const fretSpan = getFretSpan(width)
  return (width - fretSpan) / 2
}

export function getStringOffset(height: number) {
  const stringSpan = getStringSpan(height)
  return (height - stringSpan) / 2
}

export function getFretSpacing(width: number) {
  const fretSpan = getFretSpan(width)
  return fretSpan / NUM_FRETS
}

export function getStringSpacing(height: number) {
  const stringSpan = getStringSpan(height)
  return stringSpan / NUM_STRINGS
}
