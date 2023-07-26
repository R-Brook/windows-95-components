import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/legacy/image"

const ShutDownPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Windows 95 Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-black flex flex-col items-center flex-wrap max-w-screen-lg m-auto mt-24 h-608 p-3 relative">
        <h1 className="text-5xl absolute top-1/3 font-simple tracking-tight text-center text-orange z-50">
          It&apos;s now safe to turn off
          <br /> your computer.
        </h1>
      </div>
    </>
  )
}

export default ShutDownPage
