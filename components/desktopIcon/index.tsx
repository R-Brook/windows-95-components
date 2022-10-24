import React, { FC } from "react"
import Image from "next/image"

export interface DesktopIconProps {
  image: string
  imageWidth?: string
  imageHeight?: string
  alt: string
  name: string
  onClick?: () => void
}

export const DesktopIcon: FC<DesktopIconProps> = ({
  image,
  alt,
  name,
  imageHeight = "48px",
  imageWidth = "48px",
  onClick,
}) => {
  return (
    <button className="flex flex-col items-center w-22 mt-3" onClick={onClick}>
      <Image src={image} alt={alt} width={imageWidth} height={imageHeight} />

      <span className=" text-white mt-1 ">{name}</span>
    </button>
  )
}
