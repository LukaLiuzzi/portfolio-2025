import React from "react"

interface SectionProps {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="flex flex-col gap-y-3 md:flex-row">{children}</section>
  )
}

export default Section
