"use client"
import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function RomPageContent( props: any ) {
    const romDevices: any[] = props["romDevices"]
    console.log(romDevices)
    const name = romDevices[0]["name"]
    const extended_codename = romDevices[0]["extended_codename"]
    const builds = romDevices[0]["builds"]

    return (
        <main className="flex flex-col items-center justify-between pt-12 md:pt-24">
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-0 md:w-1/4'></div>
                <div className='md:w-1/4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='w-1/12 md:w-0'></div> */}
                        <div className='px-4 md:px-0'>
                            <h1 className='font-bold text-4xl'>{props["romName"]}</h1>
                            <div className='h-10'></div>
                            <h2 className='font-bold text-xl'>Supported on {romDevices.length} device</h2>
                            <h2 className='font-bold text-xl'>Device name: {name}</h2>
                            <h2 className='font-bold text-xl'>Extended codename: {extended_codename}</h2>
                        </div>
                        <div className='w-full'>
                            <h1 className='font-bold text-2xl'>Builds</h1>
                            <Accordion className='w-full'>
                                {builds.map((build: any) => (
                                    <AccordionTab>{build["version"]}</AccordionTab>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col items-center'>
                    <h1 className='font-bold text-3xl'>Devices</h1>
                    <div className='h-10'></div>
                    <img src={"https://raw.githubusercontent.com/PiotrZPL/PiotrZPLBuilds/main/images/" + extended_codename + ".webp"} alt={extended_codename} height={500}></img>
                    <div className='h-4'></div>
                    <h1 className='font-bold text-xl'>{extended_codename}</h1>
                </div>
            </div>
        </main>
    )
}
