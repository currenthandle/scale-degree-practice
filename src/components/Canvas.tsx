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

interface Dimensions {
  width: number
  height: number
}

const NUM_FRETS = 8

export default function Canvas(dimensions: Dimensions) {
  useStrictMode(true)

  return (
    <Stage {...dimensions}>
      <Wood {...dimensions} />
      <FretWires {...dimensions} />
    </Stage>
  )
}

function Wood({ width, height }: Dimensions) {
  return (
    <Layer>
      <Rect
        height={height}
        width={width}
        fill='tan'
        stroke='black'
        strokeWidth={10}
      />
    </Layer>
  )
}

function FretWires({ width, height }: Dimensions) {
  return (
    <Layer>
      {Array(NUM_FRETS - 1)
        .fill('')
        .map((_, i) => {
          const [yStart, yEnd] = [0, height]
          const x = (width / NUM_FRETS) * (i + 1)

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
