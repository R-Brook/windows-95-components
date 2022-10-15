import React, { FC } from "react"

export const Container = ({ children }: any) => {
  return (
    <div className="bg-green-blue block max-w-screen-lg m-auto mt-24 h-540 p-2">
      {children}
    </div>
  )
}
