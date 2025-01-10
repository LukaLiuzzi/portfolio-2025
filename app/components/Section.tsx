import React from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`flex flex-col gap-y-3 md:flex-row ${className}`}>
      {children}
    </section>
  )
}

export default Section
