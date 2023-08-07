import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { RadioButton } from "."
import userEvent from "@testing-library/user-event"

describe("Radio button", () => {
  it("renders a single radio button correctly", () => {
    render(
      <RadioButton
        name={"name"}
        id={"id"}
        label={"Radio button label"}
        value={"value"}
        defaultChecked={false}
      />
    )
    const radioButton = screen.getByLabelText(/Radio button label/i)
    expect(radioButton).toBeInTheDocument()
  })
  it("renders a radio button group correctly", () => {
    render(
      <fieldset>
        <legend>What time of day is it:</legend>
        <RadioButton
          name={"timeOfDay"}
          id={"day"}
          label={"It is Daytime"}
          value={"daytime"}
          defaultChecked={true}
        />
        <RadioButton
          name={"timeOfDay"}
          id={"night"}
          label={"It is Nighttime"}
          value={"nighttime"}
        />
      </fieldset>
    )

    const radioButtons = screen.getAllByLabelText(/it is/i)
    expect(radioButtons).toHaveLength(2)
    expect(radioButtons[0]).toBeChecked()
    expect(radioButtons[1]).not.toBeChecked()
  })
})
