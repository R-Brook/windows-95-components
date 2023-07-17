import React, { FC } from "react"
import cx from "classnames"
interface RadioButtonProps extends React.HTMLProps<HTMLInputElement> {
  name: string
  onChange?: (event) => void
}

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  id,
  label,
  value,
  defaultChecked,
  className,
}) => {
  return (
    <div className={cx(className, "radio-button flex items-center")}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className=" ml-1">
        {label}
      </label>
    </div>
  )
}
