import React from "react"

interface SubtitleProps {
  text: string
}

const Subtitle = ({ text }: SubtitleProps) => {
  return <h2 className="text-lg font-medium md:w-1/4 mb-4">{text}</h2>
}

export default Subtitle
