import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Container } from "@/components/container"
import { StartBar } from "@/components/startBar"
import { Notepad } from "@/components/notepad"
import { useNotepadContents } from "@/services/notepad"

const NotepadPage: NextPage = () => {
  const { file_name } = useNotepadContents()
  return (
    <>
      <Head>
        <title>Windows 95 Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* @TODO: Proper exit fullscreen and minimise functionality */}
        <Notepad handleNotepad fullscreen />
      </Container>
      <StartBar />
    </>
  )
}

export default NotepadPage
