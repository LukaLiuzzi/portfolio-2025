import React from "react"
import { BsArrowUpRightSquare } from "react-icons/bs"
import Subtitle from "./Subtitle"
import ExperienceItem from "./ExperienceItem"
import Section from "./Section"
import Link from "next/link"

const Experience = () => {
  return (
    <Section>
      <Subtitle text="Experiencia" />
      <div className="flex flex-col gap-y-4 w-full md:w-3/4">
        <ExperienceItem
          title="Desarrollador Full Stack"
          company="Luzidev"
          date="2024 - Actualidad"
          description="Diseño y desarrollo aplicaciones web y moviles de extremo a extremo, abarcando tanto el frontend como el backend. Colaboro de manera activa en equipos multidisciplinarios de desarrollo, participando en reuniones estratégicas con los clientes para comprender y cumplir con sus requisitos."
        />
        <ExperienceItem
          title="Desarrollador Full Stack"
          company="Boceto Contenidos"
          date="2021 - 2024"
          description="Desarrollé soluciones web personalizadas, optimizando el rendimiento y la experiencia del usuario. Implementé nuevas funcionalidades y realicé mantenimiento de aplicaciones existentes, asegurando la calidad del código y la satisfacción del cliente. Trabajé en colaboración con diseñadores y otros desarrolladores para garantizar la coherencia y la eficacia en el desarrollo de productos."
        />
        <ExperienceItem
          title="Desarrollador Freelance"
          company="Freelance"
          date="2020 - 2021"
          description="Desarrollé proyectos a medida para diversos clientes, abarcando desde la conceptualización hasta la implementación. Utilicé tecnologías modernas para crear aplicaciones web eficientes y escalables."
        />
        <Link
          target="_blank"
          className="flex items-center justify-center w-full py-3 text-lg font-bold text-primary-background bg-primary-foreground rounded-lg lg:w-1/3 transition-all hover:scale-105 hover:shadow-lg hover:bg-primary-foreground/90"
          href="/resume.pdf"
        >
          Ver el CV <BsArrowUpRightSquare className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </Section>
  )
}

export default Experience
