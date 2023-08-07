import React, { useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/legacy/image"
import { useRouter } from "next/router"

const ShutDownPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/switchOff")
    }, 3000)
    return () => clearTimeout(timer)
  })
  return (
    <>
      <Head>
        <title>Windows 95 Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-green-blue flex flex-col items-center flex-wrap max-w-screen-lg m-auto mt-24 h-608 p-3 relative">
        <Image src="/images/windows-95-clouds.jpg" alt="" layout="fill" />
        <h1 className="text-5xl absolute top-1/3 font-simple tracking-tight text-center text-orange z-50">
          Please wait while your computer
          <br /> shuts down
        </h1>
        <div className="z-50 mt-auto mb-14 relative">
          <span className="text-white text-6xl font-simple absolute -top-10">
            Microsoft
          </span>
          <div className=" ml-6">
            <span className="text-8xl font-simple font-extraBold tracking-tighter">
              Windows
            </span>
            <span className="text-white text-8xl font-simple">95</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShutDownPage
