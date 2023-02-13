import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Notepad } from "."

describe("Notepad", () => {
  it("renders correctly", () => {
    render(
      <Notepad
        title={"Untitled file"}
        defaultValue={"lorem ipsum"}
        handleNotepad={() => {
          console.log("logged")
        }}
        fullscreen={false}
      />
    )

    const notepad = screen.getByRole("heading", {
      name: /Untitled file/i,
    })
    expect(notepad).toBeInTheDocument()
  })
})
