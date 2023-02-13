import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StartBar } from "."

describe("Start bar", () => {
  it("renders correctly", () => {
    render(<StartBar />)

    const bar = screen.getByRole("button", {
      name: /Start/i,
    })
    expect(bar).toBeInTheDocument()
  })

  it.skip("renders correctly", () => {
    render(<StartBar />)
    const theTime = new Date().toLocaleString("en-gb", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })

    const foo = screen.getByText(theTime)
    console.log("foo", foo)
    expect(foo).toBeInTheDocument()
  })
})
