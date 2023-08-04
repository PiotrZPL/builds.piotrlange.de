"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimationControls } from "framer-motion"
import Link from 'next/link'

export default function Home() {
  function handleClick(right: boolean) {
    controls.set("initial")
    var newIndex: number = 0
    if (right) {
      if (index == 2) {
        newIndex = 0
      }
      else {
        newIndex = index + 1
      }
    }
    else {
      if (index == 0) {
        newIndex = 2
      }
      else {
        newIndex = index - 1
      }
    }
    setIndex(newIndex)
    var newList = ["hidden", "hidden", "hidden"]
    newList[newIndex] = "block"
    setListOfClasses(newList)
    controls.start("final")
    console.log(newIndex)
  }

  var listOfNames: string[] = ["Havoc-OS", "AwakenOS", "SuperiorOS"]
  var listOfLinks: string[] = ["/havocos", "awakenos", "/superioros"]
  const [index, setIndex] = React.useState(0);
  const [listOfClasses, setListOfClasses] = React.useState(["block", "hidden", "hidden"]);
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
    <main className="flex flex-col items-center justify-between pt-24 pb-24">
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
            <Image src="/havoc.svg" className={listOfClasses[0]} width={200} height={200} alt="Havoc-OS"/>
            <Image src="/awaken.png" className={listOfClasses[1]} width={200} height={200} alt="AwakenOS"/>
            <Image src="/superior.png" className={listOfClasses[2]} width={200} height={200} alt="SuperiorOS"/>
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
