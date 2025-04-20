import React from "react"
import Section from "./Section"
import Subtitle from "./Subtitle"
import ExperienceItem from "./ExperienceItem"

const Education = () => {
  return (
    <Section>
      <Subtitle text="Educación" />
      <div className="flex flex-col gap-y-4 w-full md:w-3/4">
        <ExperienceItem
          title="Licenciatura Universitaria en Ciberseguridad"
          company="Universidad Nacional Raúl Scalabrini Ortiz"
          date="2023 - Actualidad"
        />
        <ExperienceItem
          title="Carrera de Desarrollo Full Stack"
          company="CoderHouse"
          date="Egreso en 2022"
        />
        <ExperienceItem
          title="Inglés B1"
          company="Centro Universitario de Idiomas"
          date="2022 - Actualidad"
        />
      </div>
    </Section>
  )
}

export default Education
