import React, { FC } from "react"
import Image from "next/image"

interface DesktopIconProps {
  image: string
  imageWidth?: number
  imageHeight?: number
  alt: string
  name: string
  onClick?: () => void
}

export const DesktopIcon: FC<DesktopIconProps> = ({
  image,
  alt,
  name,
  imageHeight = 48,
  imageWidth = 48,
  onClick,
}) => {
  return (
    <button className="flex flex-col items-center w-24 mt-3" onClick={onClick}>
      <Image
        src={image}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className="bottom-1 border-black"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <span className=" text-white mt-1 ">{name}</span>
    </button>
  )
}
