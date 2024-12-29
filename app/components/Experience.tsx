import React from "react"
import Subtitle from "./Subtitle"
import ExperienceItem from "./ExperienceItem"
import Section from "./Section"

const Experience = () => {
  return (
    <Section>
      <Subtitle text="Experiencia" />
      <div className="flex flex-col gap-y-4 w-full md:w-3/4">
        <ExperienceItem
          title="Desarrollador Full Stack"
          company="Boceto Contenidos"
          date="2021 - Actualidad"
          description="Diseñé y desarrollé aplicaciones web de extremo a extremo, abarcando tanto el frontend como el backend, con un enfoque personalizado para satisfacer las necesidades específicas de los clientes. Colaboré de manera efectiva en equipos multidisciplinarios de desarrollo, participando en reuniones estratégicas con los clientes para comprender y cumplir con sus requisitos."
        />
        <ExperienceItem
          title="Desarrollador Full Stack"
          company="Boceto Contenidos"
          date="2021 - Actualidad"
          description="Diseñé y desarrollé aplicaciones web de extremo a extremo, abarcando tanto el frontend como el backend, con un enfoque personalizado para satisfacer las necesidades específicas de los clientes. Colaboré de manera efectiva en equipos multidisciplinarios de desarrollo, participando en reuniones estratégicas con los clientes para comprender y cumplir con sus requisitos."
        />
        <ExperienceItem
          title="Desarrollador Full Stack"
          company="Boceto Contenidos"
          date="2021 - Actualidad"
          description="Diseñé y desarrollé aplicaciones web de extremo a extremo, abarcando tanto el frontend como el backend, con un enfoque personalizado para satisfacer las necesidades específicas de los clientes. Colaboré de manera efectiva en equipos multidisciplinarios de desarrollo, participando en reuniones estratégicas con los clientes para comprender y cumplir con sus requisitos."
        />
        <a
          className="flex items-center justify-center w-full py-3 text-lg font-bold text-primary-background bg-primary-foreground rounded-lg lg:w-1/3"
          href="/CV_2025.pdf"
          download
        >
          Descargar CV
        </a>
      </div>
    </Section>
  )
}

export default Experience
