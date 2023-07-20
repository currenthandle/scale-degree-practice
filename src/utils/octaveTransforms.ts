import { Position } from './types'

export function cOctave(pos: Position) {
  if (pos.string !== 5 && pos.string !== 2) {
    throw new Error('Not a C shape')
  }

  if (pos.string === 5) {
    return [pos, { string: 2, fret: pos.fret - 2 }]
  }

  if (pos.string === 2) {
    return [pos, { string: 5, fret: pos.fret + 2 }]
  }
}

export function aOctave(pos: Position) {
  if (pos.string !== 5 && pos.string !== 3) {
    throw new Error('Not an A shape')
  }

  if (pos.string === 5) {
    return [pos, { string: 3, fret: pos.fret + 2 }]
  }

  if (pos.string === 3) {
    return [pos, { string: 5, fret: pos.fret - 2 }]
  }
}

export function gOctave(pos: Position) {
  if (pos.string !== 6 && pos.string !== 3 && pos.string !== 1) {
    throw new Error('Not a G shape')
  }

  if (pos.string === 6) {
    return [
      pos,
      { string: 3, fret: pos.fret - 3 },
      { string: 1, fret: pos.fret },
    ]
  }

  if (pos.string === 3) {
    return [
      pos,
      { string: 6, fret: pos.fret + 3 },
      { string: 1, fret: pos.fret + 3 },
    ]
  }

  if (pos.string === 1) {
    return [
      pos,
      { string: 6, fret: pos.fret },
      { string: 3, fret: pos.fret - 3 },
    ]
  }
}

export function eOctave(pos: Position) {
  if (pos.string !== 6 && pos.string !== 4 && pos.string !== 1) {
    throw new Error('Not an E shape')
  }

  if (pos.string === 6) {
    return [
      pos,
      { string: 4, fret: pos.fret + 2 },
      { string: 1, fret: pos.fret },
    ]
  }

  if (pos.string === 4) {
    return [
      pos,
      { string: 1, fret: pos.fret - 2 },
      { string: 6, fret: pos.fret - 2 },
    ]
  }

  if (pos.string === 1) {
    return [
      pos,
      { string: 6, fret: pos.fret },
      { string: 4, fret: pos.fret + 2 },
    ]
  }
}

export function dOctave(pos: Position) {
  if (pos.string !== 4 && pos.string !== 2) {
    throw new Error('Not a D shape')
  }

  if (pos.string === 4) {
    return [pos, { string: 2, fret: pos.fret + 3 }]
  }

  if (pos.string === 2) {
    return [pos, { string: 2, fret: pos.fret - 3 }]
  }
}
