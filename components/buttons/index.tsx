import React, { FC } from "react"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  width: "wide" | "tight"
}

export const Button: FC<ButtonProps> = ({ width, children }) => {
  return (
    <button
      className={
        "bg-gray border-4 border-t-gray-light border-l-gray-light border-r-black border-b-black" +
        " " +
        (width === "wide" ? " px-6 " : "px-2")
      }
    >
      {children}
    </button>
  )
}
// px-10 py-1
