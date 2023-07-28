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
                <div className='w-0 md:w-1/6'></div>
                <div className='md:w-2/6 bg-gray-800 rounded-lg border-2 md:border-4 border-white'>
                    <div className='flex flex-col'>
                        {/* <div className='w-1/12 md:w-0'></div> */}
                        <div className='px-4'>
                            <h1 className='font-bold text-4xl'>{props["romName"]}</h1>
                            <div className='h-2 md:h-4'></div>
                            <h2 className='font-bold text-xl'>Supported on {romDevices.length} device</h2>
                            <h2 className='font-bold text-xl'>Device name: {name}</h2>
                            <h2 className='font-bold text-xl'>Extended codename: {extended_codename}</h2>
                        </div>
                        <div className='h-2 md:h-4'></div>
                        <div className='w-full px-4'>
                            <h1 className='font-bold text-2xl'>Builds</h1>
                            <div className='h-1 md:h-2'></div>
                            <Accordion className='w-full'>
                                {builds.map((build: any) => {
                                    if (build["direct_download"]) {
                                        return <AccordionTab 
                                            header={<div className='flex justify-between w-full'>
                                                <div>
                                                    <p>{build["version_name"]}</p>
                                                </div>
                                                <div>
                                                    <p>{build["build_date"]}</p>
                                                </div>
                                            </div>}>
                                                <p>Android {build["android_version"]}</p>
                                                <p>Kernel: Linux {build["kernel_version"]}</p>
                                                <p>Direct</p>
                                        </AccordionTab>
                                    }
                                    return <AccordionTab 
                                        header={<div className='flex justify-between w-full'>
                                            <div>
                                                <p>{build["version_name"]}</p>
                                            </div>
                                            <div>
                                                <p>{build["build_date"]}</p>
                                            </div>
                                        </div>}>
                                            <p>Android {build["android_version"]}</p>
                                            <p>Kernel: Linux {build["kernel_version"]}</p>
                                    </AccordionTab>
                                })}
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
