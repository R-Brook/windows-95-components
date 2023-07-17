import React from "react"
import cx from "classnames"
import { Button } from "@/components/buttons"
import Image from "next/image"
import { Alert } from "../alert"
import { ButtonLink } from "../buttons/ButtonLink"
import { RadioButton } from "../radioButtons"

export const ShutDown = ({}) => {
  const options = [
    "Shut down the computer?",
    "Restart the computer?",
    "Restart the computer in MS-DOS mode?",
  ]

  return (
    <>
      <div className=" w-full opacity-40 top-0 left-0 right-0 -bottom-11 z-50 absolute bg-black  " />
      <Alert title="Shut Down Windows" className="" exit="/">
        <div className="flex mb-10">
          <div className="h-12 w-12 relative">
            <Image
              src="/images/icons/shut-down.png"
              alt="Shut Down..."
              fill
              sizes="100vw"
            />
          </div>
          <div className=" ml-5">
            {" "}
            <fieldset>
              <legend>Are you sure you want to:</legend>

              <RadioButton
                label="Shut down the computer?"
                id="shut-down"
                value="shut-down"
                name="shutdown-options"
                defaultChecked
              />
              <RadioButton
                label="Restart the computer?"
                id="restart"
                value="restart"
                name="shutdown-options"
              />
              <RadioButton
                label="Restart the computer in MS-DOS mode?"
                id="restart-ms-dos"
                value="restart-ms-dos"
                name="shutdown-options"
              />
            </fieldset>
          </div>
        </div>
        <div className="relative flex justify-end">
          <ButtonLink
            width="wide"
            className="relative border-0  mt-0.5 flex items-center"
            href={""}
          >
            <span className="text-l">Yes</span>
          </ButtonLink>
          <ButtonLink
            width="wide"
            className="relative border-0  mt-0.5 flex items-center"
            href={"/"}
          >
            <span className="text-l">No</span>
          </ButtonLink>
          <Button
            width="wide"
            className="relative border-0  mt-0.5 flex items-center"
            onClick={() => console.log("shut down")}
          >
            <span className="text-l">Help</span>
          </Button>
        </div>
      </Alert>
    </>
  )
}
