"use client"
import React from 'react'

export default function RomPageContent( props: any ) {
    const romDevices: any[] = props["romDevices"]
    console.log(romDevices)
    const name = romDevices[0]["name"]
    const extended_codename = romDevices[0]["extended_codename"]

    return (
        <main className="flex flex-col items-center justify-between pt-24">
            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-0 md:w-1/4'></div>
                <div className='md:w-1/4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='w-1/12 md:w-0'></div> */}
                        <div>
                            <h1 className='font-bold text-3xl'>{props["romName"]}</h1>
                            <h2 className='font-bold text-xl'>Supported on {romDevices.length} device</h2>
                            <h2 className='font-bold text-xl'>Device name: {name}</h2>
                            <h2 className='font-bold text-xl'>Extended codename: {extended_codename}</h2>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h1>Devices</h1>
                </div>
            </div>
        </main>
    )
}
