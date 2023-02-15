import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StartBarMenu } from "."

describe("Start bar menu", () => {
  it("renders correctly", () => {
    render(<StartBarMenu />)

    const menu = screen.getByText(/windows/i)
    expect(menu).toBeInTheDocument()
  })
})
