'use client'

import { useEffect, useState } from 'react'
import gsap from "gsap"
import {
  Introduction
} from '@/components/modules'

export default function Home() {

  const [update, setUpdate] = useState(false)

  useEffect(() => {

    const TimeLine = gsap.timeline({ defaults: { duration: 1 } })

    TimeLine.from('.section', {
      yPercent: -100,
      opacity: 0,
      ease: 'back'
    })
      .from('.title', {
        xPercent: -100,
        opacity: 0,
        ease: 'back',
        stagger: 0.5
      })

    // gsap.registerPlugin(SplitText) 
    // let splite = new SplitText('.title', { type: "chars" })
    // gsap.from(splite.chars, {
    //   xPercent: -50,
    //   opacity: 0,
    //   direction: 0.5,
    //   stagger: 0.05
    // })

  }, [update])

  return (
    <main className="main">

      <Introduction />

      <button
        className='absolute bg-red-500 bottom-0 left-0 p-4 m-4 rd'
        onClick={() => setUpdate(state => !state)}
      >
      </button>

    </main>
  )
}
