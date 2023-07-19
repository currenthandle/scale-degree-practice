'use client'
// import Canvas from '@/components/Canvas'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Canvas = dynamic(() => import('../components/Canvas'), {
  ssr: false,
})

export interface Dimensions {
  width: number
  height: number
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null)
  const [{ width, height }, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })
  // get height and width of container
  useEffect(() => {
    if (!container.current) {
      return
    }
    const { width, height } = container.current.getBoundingClientRect()
    setDimensions({ width, height })
  }, [])
  return (
    <main className='h-full max-h-full'>
      <div
        className='w-8/12 aspect-video border-red-400 border-box m-auto pt-10'
        ref={container}
      >
        <Canvas width={width} height={height} />
      </div>
    </main>
  )
}
