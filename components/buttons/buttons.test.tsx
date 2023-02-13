import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "."

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button width={"tight"}>Lorem ipsum</Button>)

    const button = screen.getByRole("button", {
      name: /Lorem ipsum/i,
    })

    expect(button).toBeInTheDocument()
  })
})
