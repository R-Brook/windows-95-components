import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { RecycleBin } from "."

describe("Recycle bin", () => {
  it("renders correctly", () => {
    render(<RecycleBin />)

    const recycleBin = screen.getByTestId("recycleBin")
    expect(recycleBin).toBeInTheDocument()
  })
  it.skip("can be emptied", () => {
    render(<RecycleBin />)
    const recycleBin = screen.getByTestId("recycleBin")
    recycleBin.click()
    const empty = screen.getByText("Empty")
    expect(empty).toBeInTheDocument()
    empty.click()
  })
})
