import { SCALE_DEGREES } from './constants'

export type ScaleDegree = (typeof SCALE_DEGREES)[number]

export interface Dimensions {
  width: number
  height: number
}

export interface Position {
  string: number
  fret: number
}
