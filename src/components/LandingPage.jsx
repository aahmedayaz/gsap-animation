import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

  const wordsRef = useRef(null)
  const headingRef = useRef(null)

  const tl1 = gsap.timeline();
  const tl2 = gsap.timeline();

  useGSAP(() => {
    const words = wordsRef.current.querySelectorAll('h1')
    words.forEach((word, index) => {
      let x = gsap.utils.random(-500, 500, 20)
      let y = gsap.utils.random(-500, 500, 20)

      tl1.from(word, {
        opacity: 0,
        x: x,
        y: y,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(0.5,0.3)"
      })
    })
  })

  useGSAP(() => {
    tl2.to(headingRef.current, {
      x: -4200,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%', // Trigger when heading enters 80% of the viewport from the top
        end: 'top 0%',   // Trigger until heading is at 20% from the top of the viewport
        scrub: 1,         // Smooth scrub effect
      },
    })
  })


  return (
    <main className='main-container'>
      <div className='hero-container'>
        <section className="left-main-section"></section>
        <section className="right-main-section"></section>
        <div className="words" ref={wordsRef}>
          <h1>A</h1>
          <h1>n</h1>
          <h1>i</h1>
          <h1>m</h1>
          <h1>a</h1>
          <h1>t</h1>
          <h1>i</h1>
          <h1>o</h1>
          <h1>n</h1>
          <h1>s</h1>
        </div>
      </div>
      <section className='container'>
        <h1 ref={headingRef}>Learning &#x1F680; GSAP & ScrollTrigger in React &#128640;</h1>
      </section>
    </main>
  )
}

export default LandingPage