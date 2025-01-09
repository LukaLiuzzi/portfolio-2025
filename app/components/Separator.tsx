import React from "react"

interface SeparatorProps {
  withMargin?: boolean
}
const Separator = ({ withMargin = true }: SeparatorProps) => {
  return (
    <div
      className={`border-separate border-border border-b w-full border-dashed ${
        withMargin ? "my-14" : "mt-14"
      }`}
    ></div>
  )
}

export default Separator
