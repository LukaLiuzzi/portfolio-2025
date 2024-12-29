import React from "react"
import Subtitle from "./Subtitle"
import Section from "./Section"

const About = () => {
  return (
    <Section>
      <Subtitle text="Sobre mí" />
      <p className="text-pretty text-muted-foreground md:w-3/4">
        Diseño y desarrollo aplicaciones web de extremo a extremo, con un
        enfoque personalizado para crear soluciones técnicas y así satisfacer
        las necesidades específicas de los clientes. Trabajo con las últimas
        tecnologías, colaboro en equipo y siempre me esfuerzo por superar las
        expectativas.
      </p>
    </Section>
  )
}

export default About
