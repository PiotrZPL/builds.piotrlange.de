"use client"
import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function RomPageContent( props: any ) {
    const romDevices: any[] = props["romDevices"]
    console.log(romDevices)
    const name = romDevices[0]["name"]
    const extended_codename = romDevices[0]["extended_codename"]
    const builds = romDevices[0]["builds"]
    const device_repository_name = romDevices[0]["device_repository_name"]
    const device_repository_link = romDevices[0]["device_repository_link"]

    return (
        <main className="flex flex-col items-center justify-between pt-12 md:pt-24">
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-0 md:w-1/6'></div>
                <div className='md:w-2/6 bg-gray-800 rounded-lg border-2 md:border-4 border-white'>
                    <div className='flex flex-col'>
                        {/* <div className='w-1/12 md:w-0'></div> */}
                        <div className='px-4 pt-2'>
                            <h1 className='font-bold text-4xl'>{props["romName"]}</h1>
                            <div className='h-2 md:h-4'></div>
                            <h2 className='font-bold text-xl py-1'>Supported on {romDevices.length} device</h2>
                            <hr className="border-android border"></hr>
                            <h2 className='font-bold text-xl py-1'>Device name: {name}</h2>
                            <hr className="border-android border"></hr>
                            <h2 className='font-bold text-xl py-1'>Extended codename: {extended_codename}</h2>
                            <hr className="border-android border"></hr>
                            <h2 className='font-bold text-xl py-1'>Device repository: <a className='android-highlighted' href={device_repository_link}>{device_repository_name}</a></h2>
                        </div>
                        <div className='h-2 md:h-4'></div>
                        <div className='w-full px-4'>
                            <h1 className='font-bold text-2xl'>Builds</h1>
                            <div className='h-1 md:h-2'></div>
                            <div className='overflow-scroll h-96'>
                                <Accordion className='w-full'>
                                    {builds.map((build: any, index: number) => {
                                        if (build["direct_download"]) {
                                            return (<AccordionTab 
                                                key={`a${index}`}
                                                header={<div className='flex justify-between w-full'>
                                                    <div>
                                                        <p>{build["version_name"]}</p>
                                                    </div>
                                                    <div>
                                                        <p>{build["build_date"]}</p>
                                                    </div>
                                                </div>}>
                                                    <p className='font-bold'>Android {build["android_version"]}</p>
                                                    <div className='flex'><p>Kernel:&nbsp;</p><p className='font-bold'>Linux {build["kernel_version"]}</p></div>
                                                    <div className='flex flex-col items-center pt-2'>
                                                        <button className='bg-android rounded-md w-fit'>
                                                            <a target="_blank" rel="noopener noreferrer" href={`https://cdn.piotrlange.de/${build["file_name"]}`}>
                                                                <p className='p-2 text-lg md:text-2xl font-bold'><i className='jtbIL-arrow-down-to-bracket'></i> Direct download</p>
                                                            </a>
                                                        </button>
                                                        <div className='h-2'></div>
                                                        <button className='bg-sf rounded-md w-fit'>
                                                            <a target="_blank" rel="noopener noreferrer" href={build["sourceforge_link"]}>
                                                                <p className='p-2 text-lg md:text-2xl font-bold'><i className='jtbIB-sourceforge'></i> Download from SourceForge</p>
                                                            </a>
                                                        </button>
                                                    </div>
                                            </AccordionTab>)
                                        }
                                        return (<AccordionTab 
                                            key={`a${index}`}
                                            header={<div className='flex justify-between w-full'>
                                                <div>
                                                    <p>{build["version_name"]}</p>
                                                </div>
                                                <div>
                                                    <p>{build["build_date"]}</p>
                                                </div>
                                            </div>}>
                                                <p className='font-bold'>Android {build["android_version"]}</p>
                                                <div className='flex'><p>Kernel:&nbsp;</p><p className='font-bold'>Linux {build["kernel_version"]}</p></div>
                                                <div className='flex flex-col items-center pt-2'>
                                                    <button className='bg-sf rounded-md w-fit'>
                                                        <a target="_blank" rel="noopener noreferrer" href={build["sourceforge_link"]}>
                                                            <p className='p-2 text-lg md:text-2xl font-bold'><i className='jtbIB-sourceforge'></i> Download from SourceForge</p>
                                                        </a>
                                                    </button>
                                                </div>
                                        </AccordionTab>)
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col items-center pt-4 md:pt-0'>
                    <h1 className='font-bold text-3xl'>Devices</h1>
                    <img className='pt-4 md:pt-8' src={"https://raw.githubusercontent.com/PiotrZPL/PiotrZPLBuilds/main/images/" + extended_codename + ".webp"} alt={extended_codename} height={500}></img>
                    <div className='h-4'></div>
                    <h1 className='font-bold text-xl'>{extended_codename}</h1>
                </div>
            </div>
        </main>
    )
}
