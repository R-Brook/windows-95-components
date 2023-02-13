import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Container } from "../components/container"

import { StartBar } from "../components/startBar"
import { Notepad } from "components/notepad"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Windows 95 Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* @TODO: Proper exit fullscreen and minimise functionality */}
        <Notepad
          title="Untitled - Notepad"
          defaultValue={"lorem ipsum"}
          handleNotepad
          fullscreen
        />
      </Container>
      <StartBar />
    </>
  )
}

export default Home
