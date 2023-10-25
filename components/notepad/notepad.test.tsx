import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Notepad } from "."
import { NotepadProvider } from "@/services/notepad"
import { act } from "react-dom/test-utils"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    }
  },
}))

describe("Notepad", () => {
  it("renders correctly", async () => {
    await act(async () => {
      render(
        <NotepadProvider>
          <Notepad
            handleNotepad={() => {
              console.log("logged")
            }}
            fullscreen={false}
          />
        </NotepadProvider>
      )
    })

    const notepad = screen.getByRole("heading", {
      name: /Untitled.txt/i,
    })
    expect(notepad).toBeInTheDocument()
  })
})
