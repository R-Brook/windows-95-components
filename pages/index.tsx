import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Container } from "@/components/container"

import { StartBar } from "@/components/startBar"
import { DesktopIcon } from "@/components/desktopIcon"
import { RecycleBin } from "@/components/desktopIcon/RecycleBin"
import { Notepad } from "components/notepad"

const Home: NextPage = () => {
  const [notepadOpen, setNotepadOpen] = React.useState(false)

  const handleNotepad = () => {
    setNotepadOpen(false)
  }

  return (
    <>
      <Head>
        <title>Windows 95 Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <DesktopIcon
          image="/images/icons/my-computer.ico"
          alt="My Computer"
          name="My Computer"
        />
        <DesktopIcon
          image="/images/icons/my-documents-cropped.png"
          alt="My Documents"
          name="My Documents"
        />
        <RecycleBin />
        <DesktopIcon
          image="/images/icons/notepad.ico"
          alt="Notepad"
          name="Notepad"
          onClick={() => setNotepadOpen(true)}
        />
        {notepadOpen && (
          <Notepad
            title="Untitled - Notepad"
            defaultValue={"lorem ipsum"}
            handleNotepad={handleNotepad}
            fullscreen={false}
          />
        )}
      </Container>
      <StartBar />
    </>
  )
}

export default Home
