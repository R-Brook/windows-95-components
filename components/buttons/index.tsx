import React, { FC } from "react"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  primary: boolean
}

export const Button: FC<ButtonProps> = (
  {
    //
  }
) => {
  return <button className="">Button</button>
}
