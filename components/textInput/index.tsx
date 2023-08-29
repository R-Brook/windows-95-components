import React, { FC } from "react"
import cx from "classnames"

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: FC<TextInputProps> = ({
  id,
  label,
  required,
  type = "text",
  className,
  onChange = () => null,
  onBlur = () => null,
}) => {
  return (
    <div className={cx(className, "w-full flex")}>
      <label htmlFor={id} className={cx(className, " mr-2")}>
        {label}:
      </label>
      <input
        id={id}
        required={required}
        type={type || "text"}
        onChange={onChange}
        onBlur={onBlur}
        className={cx(
          "grow border-t-black border-l-black border-r-white border-b-white border-2"
        )}
      />
    </div>
  )
}
