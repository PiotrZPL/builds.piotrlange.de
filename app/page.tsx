"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimationControls } from "framer-motion"
import Link from 'next/link'

export default function Home() {
  function handleClick(right: boolean) {
    controls.set("initial")
    if (right) {
      if (index == 2) {
        setIndex(0)
      }
      else {
        setIndex(index + 1)
      }
    }
    else {
      if (index == 0) {
        setIndex(2)
      }
      else {
        setIndex(index - 1)
      }
    }
    controls.start("final")
    console.log(index)
  }

  var listOfFiles: string[] = ["/havoc.svg", "/awaken.png", "/superior.png"]
  var listOfNames: string[] = ["Havoc-OS", "AwakenOS", "SuperiorOS"]
  var listOfLinks: string[] = ["/havocos", "awakenos", "/superioros"]
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
          <div className='flex flex-col justify-center'>
            <button onClick={() => {handleClick(false)}} >
              <p className='text-9xl md:font-bold text-center'>&lt;</p>
            </button>
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
          <div className='flex flex-col justify-center'>
            <button onClick={() => {handleClick(true)}} >
              <p className='text-9xl md:font-bold text-center'>&gt;</p>
            </button>
          </div>
          <div></div>
          <div><p className='text-center font-bold text-xl'>{listOfNames[index]}</p></div>
          <div></div>
        </div>
        <div className='h-20'></div>
        <div className='flex place-content-center'>
          <button className='bg-blue-500 rounded-md'>
            <Link href={listOfLinks[index]}>
              <p className='p-5 font-bold'>Download {listOfNames[index]}</p>
            </Link>
          </button>
        </div>
      </div>
    </main>
  )
}
