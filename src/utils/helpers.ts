import {
  FRET_SPAN_RATIO,
  NUM_FRETS,
  NUM_STRINGS,
  SCALE_DEGREES,
  STRING_SPAN_RATIO,
} from './constants'
import { Dimensions, Position, ScaleDegree } from './types'

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

function getScaleDegreeInterval(scaleDegree: ScaleDegree) {
  switch (scaleDegree) {
    case '1':
      return 0
    case '2':
      return 2
    case 'b3':
      return 3
    case '3':
      return 4
    case '4':
      return 5
    case '#4':
      return 6
    case 'b5':
      return 6
    case '5':
      return 7
    case 'b6':
      return 8
    case '6':
      return 9
    case 'b7':
      return 10
    case '7':
      return 11
  }
}

// export function getScaleDegreeNotePositions(
//   scaleDegree: ScaleDegree,
//   bassNotePosition: Position
// ): Position[] {
//   const interval = getScaleDegreeInterval(scaleDegree)
//   const notes: Position[] = []
// }

export function getRandomScaleDegree() {
  return SCALE_DEGREES[Math.floor(Math.random() * SCALE_DEGREES.length)]
}
