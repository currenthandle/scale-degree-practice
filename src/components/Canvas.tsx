import { useEffect, useState } from 'react'
import {
  Stage as Fretboard,
  Layer,
  Circle,
  Rect,
  useStrictMode,
  Line,
  Ring,
} from 'react-konva'

interface Dimensions {
  width: number
  height: number
}

const NUM_FRETS = 6
const NUM_STRINGS = 6
const NOTE_RADIUS = 15

function getFretSpan(width: number) {
  return width * 0.95
}

function getStringSpan(height: number) {
  return height * 0.8
}

function getFretOffset(width: number) {
  const fretSpan = getFretSpan(width)
  return (width - fretSpan) / 2
}

function getStringOffset(height: number) {
  const stringSpan = getStringSpan(height)
  return (height - stringSpan) / 2
}

function getFretSpacing(width: number) {
  const fretSpan = getFretSpan(width)
  return fretSpan / NUM_FRETS
}

function getStringSpacing(height: number) {
  const stringSpan = getStringSpan(height)
  return stringSpan / NUM_STRINGS
}

interface Position {
  string: number
  fret: number
}
function getNoteCoordinates(
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

export default function Canvas(dimensions: Dimensions) {
  useStrictMode(true)

  return (
    <Fretboard {...dimensions}>
      <Wood {...dimensions} />
      <FretWires {...dimensions} />
      <Strings {...dimensions} />
      <Notes {...dimensions} />
    </Fretboard>
  )
}

function Wood({ width, height }: Dimensions) {
  return (
    <Layer>
      <Rect height={height} width={width} fill='tan' />
    </Layer>
  )
}

function FretWires({ width, height }: Dimensions) {
  return (
    <Layer>
      {Array(NUM_FRETS + 1)
        .fill('')
        .map((_, i) => {
          const fretSpan = getFretSpan(width)
          const offset = getFretOffset(width)

          const [yStart, yEnd] = [0, height]
          const x = (fretSpan / NUM_FRETS) * i + offset

          return (
            <Line
              key={i}
              points={[x, yStart + 5, x, yEnd - 5]}
              stroke='grey'
              lineCap='round'
              strokeWidth={7}
            />
          )
        })}
    </Layer>
  )
}

function Strings({ width, height }: Dimensions) {
  return (
    <Layer>
      {Array(NUM_STRINGS)
        .fill('')
        .map((_, i) => {
          const stringSpan = getStringSpan(height)
          const offset = getStringOffset(height)

          const [xStart, xEnd] = [0, width]
          const y = (stringSpan / (NUM_STRINGS - 1)) * i + offset
          const color = i > 1 ? 'orange' : 'silver'

          return (
            <Line
              key={i}
              points={[xStart, y, xEnd, y]}
              stroke={color}
              lineCap='round'
              strokeWidth={5}
            />
          )
        })}
    </Layer>
  )
}

function Notes({ width, height }: Dimensions) {
  const fretOffset = getFretOffset(width)
  const stringOffset = getStringOffset(height)
  const fretSpacing = getFretSpacing(width)
  // const x = fretOffset + fretSpacing / 2
  // const y = stringOffset
  const { x, y } = getNoteCoordinates({ string: 6, fret: 2 }, { width, height })

  return (
    <Layer>
      <Circle radius={NOTE_RADIUS} fill='black' x={x} y={y} />
    </Layer>
  )
}
