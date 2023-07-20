import {
  FRET_SPAN_RATIO,
  NUM_FRETS,
  NUM_STRINGS,
  STRING_SPAN_RATIO,
} from './constants'
import { Dimensions, Position } from './types'

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

export function getNoteCoordinates(
  { string, fret }: Position,
  { width, height }: Dimensions
) {
  const fretOffset = getFretOffset(width)
  const stringOffset = getStringOffset(height)

  const fretSpacing = getFretSpacing(width)
  const stringSpacing = getStringSpacing(height)

  const x = fretOffset + fretSpacing * (fret - 1 / 2)
  const y = stringOffset + stringSpacing * string
  return {
    x,
    y,
  }
}
