import "../css/globals.css"
import type { AppProps } from "next/app"
import { NotepadProvider } from "services/notepad"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotepadProvider>
      <Component {...pageProps} />
    </NotepadProvider>
  )
}

export default MyApp
