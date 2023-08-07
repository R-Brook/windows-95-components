import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Alert } from "."

describe("Alert", () => {
  it("renders correctly", () => {
    render(
      <Alert
        title="An alert box"
        exit="https://github.com/R-Brook/windows-95-components"
      >
        <span>Test</span>
      </Alert>
    )
    const alert = screen.getByRole("heading", { name: /An alert box/i })
    expect(alert).toBeInTheDocument()
  })
})
