import React from "react"
import Subtitle from "./Subtitle"
import Section from "./Section"

const About = () => {
  return (
    <Section>
      <Subtitle text="Sobre mí" />
      <p className="text-base md:w-3/4 animate-expand-vertically">
        Diseño y desarrollo aplicaciones web de extremo a extremo. Trabajo con
        las últimas tecnologías, colaboro en equipo y siempre me esfuerzo por
        superar las expectativas. Además, disfruto impartiendo clases de
        programación, una actividad que me mantiene en constante actualización
        sobre las últimas tecnologías y los requerimientos del mercado.
      </p>
    </Section>
  )
}

export default About
