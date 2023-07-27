import React from 'react'
import { parse } from 'yaml'
import RomPageContent from './rom_page_content'

async function getRomDevices() {
    const res = await fetch('https://raw.githubusercontent.com/PiotrZPL/PiotrZPLBuilds/main/AwakenOS/devices.yaml')
    return res.text()
  }

export default async function RomPage( props: any ) {
    const romDevices = parse((await Promise.all([getRomDevices()]))[0])
    // console.log(romDevices)
    // const name = parse(romDevices)[0]["name"]
    // const codename = parse(romDevices)[0]["codename"]
    // const extended_codename = parse(romDevices)[0]["extended_codename"]
    // const builds = parse(romDevices)[0]["builds"]
    // console.log(extended_codename)
    // const newest = builds[0]["version"]
    // console.log(newest)

    return (
        <RomPageContent romName={props["romName"]} romDevices={romDevices}></RomPageContent>
    )
}
