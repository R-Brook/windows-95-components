import React, { FC } from "react"
import { Button } from "../buttons"
import Image from "next/image";
import { ButtonLink } from "../buttons/ButtonLink"

export interface TaskButtonProps {
  image: string
  alt: string
  interaction: any
}

export interface TaskButtonLinkProps {
  image: string
  alt: string
  href: string
}

export const TaskButton: FC<TaskButtonProps> = ({
  image,
  alt,
  interaction,
}) => {
  return (
    <Button
      width="tight"
      className="relative w-7 h-7 flex flex-center"
      onClick={interaction}
    >
      <div className=" w-6 h-6 relative flex flex-center ">
        <Image src={image} alt={alt} className="relative" fill sizes="100vw" />
      </div>
    </Button>
  );
}

export const TaskButtonLink: FC<TaskButtonLinkProps> = ({
  image,
  alt,
  href,
}) => {
  return (
    <ButtonLink
      width="tight"
      className="relative w-7 h-7 flex flex-center"
      href={href}
    >
      <div className=" w-6 h-6 relative flex flex-center ">
        <Image src={image} alt={alt} className="relative" fill sizes="100vw" />
      </div>
    </ButtonLink>
  );
}
