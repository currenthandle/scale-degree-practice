import {
  getFretOffset,
  getFretSpacing,
  getFretSpan,
  getNoteCoordinates,
  getStringOffset,
  getStringSpacing,
  getStringSpan,
} from '@/utils/helpers'
import { useEffect, useState } from 'react'
import {
  Stage,
  Layer,
  Circle,
  Rect,
  useStrictMode,
  Line,
  Ring,
} from 'react-konva'

import { NUM_FRETS, NUM_STRINGS, NOTE_RADIUS } from '@/utils/constants'
import { Dimensions } from '@/utils/types'

export default function FretboardCanvas(dimensions: Dimensions) {
  useStrictMode(true)

  return (
    <Stage {...dimensions}>
      <Wood {...dimensions} />
      <FretWires {...dimensions} />
      <Strings {...dimensions} />
      <Notes {...dimensions} />
    </Stage>
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
  const bass = { string: 6, fret: 2 }
  const { x, y } = getNoteCoordinates(
    { string: bass.string, fret: bass.fret },
    { width, height }
  )

  return (
    <Layer>
      {/* Bass Note */}
      <Circle radius={NOTE_RADIUS} fill='black' x={x} y={y} />
    </Layer>
  )
}
