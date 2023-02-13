import React, { FC } from "react"
import cx from "classnames"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  width: "wide" | "tight"
  href: string
}

export const ButtonLink: FC<ButtonProps> = ({
  width,
  href,
  className,
  children,
}) => {
  return (
    <a
      className={cx(
        className,
        "bg-gray shadow-button group relative active:shadow-button-active py-0.5" +
          " " +
          (width === "wide" ? " px-6 " : "")
      )}
      href={href}
    >
      <span className="m-0.5 flex absolute group-focus:border-dotted group-focus:border-2 inset-1"></span>
      {children}
    </a>
  )
}
