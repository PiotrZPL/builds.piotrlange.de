"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar'

export default function RomPage( props: any ) {
    return (
        <main className="flex flex-col items-center justify-between pt-24">
            <div>
                <h1 className='text-center font-bold text-3xl'>{props["romName"]}</h1>
                <h2 className='text-center font-bold text-xl'>Select your ROM</h2>
                <div className='h-10'></div>
            </div>
        </main>
    )
}
