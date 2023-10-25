import React, { FC } from "react"
import cx from "classnames"

interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  onChange?: (event) => void
}

export const DropDown: FC<DropdownProps> = ({
  id,
  label,
  required,
  className,
  children,
  onChange,
  onBlur = () => null,
}) => {
  return (
    <div className={cx(className, "w-full flex")}>
      <label htmlFor={id} className={cx(className, " mr-2")}>
        {label}:
      </label>
      <select
        id={id}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className={cx(
          "grow border-t-black border-l-black border-r-white border-b-white border-2"
        )}
      >
        {children}
      </select>
    </div>
  )
}
