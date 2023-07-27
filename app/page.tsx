"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimationControls } from "framer-motion"



export default function Home() {
  function handleClick() {
    controls.set("initial")
    if (index == 2) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    controls.start("final")
    console.log(index)
  }

  var listOfFiles: string[] = ["/havoc.svg", "/awaken.png", "/superior.png"]
  var listOfNames: string[] = ["Havoc-OS", "AwakenOS", "SuperiorOS"]
  // var imagePathIndex: number = 0
  const [index, setIndex] = React.useState(0);
  const variants = {
    "initial" : {
      scale: 0,
    },
    "final" : {
      scale: 1,
    }
  }
  const controls = useAnimationControls()

  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <div>
        <h1 className='text-center font-bold text-3xl'>PiotrZPLBuilds</h1>
        <h2 className='text-center font-bold text-xl'>Select your ROM</h2>
        <div className='h-10'></div>
        <div className='grid grid-cols-3'>
          <div onClick={handleClick} className='flex flex-col justify-center'>
            <p className='text-9xl md:font-bold text-center unselectable'>&lt;</p>
          </div>
          <motion.div
            variants={variants}
            initial="final"
            animate={controls}
            transition={{
              duration: 0.2
            }}
          >
            {/* <Image
              src={listOfFiles[index]}
              alt="Vercel Logo"
              width={200}
              height={200}
              priority
            /> */}
            <img src={listOfFiles[index]} width={200} height={200} alt={listOfNames[index]}/>
          </motion.div>
          <div onClick={handleClick} className='flex flex-col justify-center'>
            <p className='text-9xl md:font-bold text-center unselectable'>&gt;</p>
          </div>
          <div></div>
          <div><p className='text-center font-bold text-xl'>{listOfNames[index]}</p></div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
