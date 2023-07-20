'use client'
import { getRandomScaleDegree } from '@/utils/helpers'
import { ScaleDegree } from '@/utils/types'
// import Canvas from '@/components/Canvas'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { isNull } from 'util'

const Canvas = dynamic(() => import('../components/Canvas'), {
  ssr: false,
})

export interface Dimensions {
  width: number
  height: number
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null)
  const [scaleDegree, setScaleDegree] = useState<ScaleDegree | undefined>()
  const [{ width, height }, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    if (!container.current) {
      return
    }
    const { width, height } = container.current.getBoundingClientRect()
    setDimensions({ width, height })
  }, [])
  useEffect(() => {
    setScaleDegree(getRandomScaleDegree())
  }, [])

  return (
    <main className='h-full max-h-full'>
      <Header scaleDegree={scaleDegree} />
      <div
        className='w-8/12 aspect-video border-red-400 border-box m-auto pt-10'
        ref={container}
      >
        {/* consider Suspense */}
        <Canvas width={width} height={height} scaleDegree={scaleDegree} />
      </div>
    </main>
  )
}

function Header({ scaleDegree }: { scaleDegree: string | undefined }) {
  return <div className='w-full flex justify-center'>{scaleDegree}</div>
}
