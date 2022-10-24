import React, { FC } from "react"

export const Container = ({ children }: any) => {
  return (
    <div className="bg-green-blue flex flex-col items-start flex-wrap max-w-screen-lg m-auto mt-24 h-608 p-3 relative">
      {children}
    </div>
  )
}
