import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ButtonLink } from "./ButtonLink"

describe("Button", () => {
  it("renders correctly", () => {
    render(
      <ButtonLink width={"tight"} href={"/"}>
        Lorem ipsum
      </ButtonLink>
    )

    const buttonLink = screen.getByRole("link", {
      name: /Lorem ipsum/i,
    })
    expect(buttonLink).toBeInTheDocument()
  })
})
