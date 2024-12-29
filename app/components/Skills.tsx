import React from "react"
import Subtitle from "./Subtitle"
import Section from "./Section"
import { IconType } from "react-icons"
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAstro,
  SiMysql,
  SiPrisma,
  SiGithub,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiSass,
  SiExpo,
  SiSqlite,
} from "react-icons/si"
import BackToTop from "./BackToTop"

interface Skill {
  name: string
  icon: IconType
}

interface SkillCategories {
  Frontend: Skill[]
  Backend: Skill[]
  Others: Skill[]
}

const skills: SkillCategories = {
  Frontend: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React Native", icon: SiReact },
    { name: "Expo", icon: SiExpo },
    { name: "Astro", icon: SiAstro },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "SASS", icon: SiSass },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
    { name: "Prisma", icon: SiPrisma },
    { name: "WordPress", icon: SiWordpress },
  ],
  Others: [
    { name: "GitHub", icon: SiGithub },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
  ],
}

const Skills = () => {
  return (
    <Section>
      <Subtitle text="Habilidades" />
      <div className="flex flex-col gap-y-4 w-full md:w-3/4">
        {(Object.entries(skills) as [keyof SkillCategories, Skill[]][]).map(
          ([category, skillList]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-muted-foreground">
                {category === "Others" ? "Otros" : category}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-4">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center w-20 h-20 text-xl group"
                  >
                    <div className="transition-transform group-hover:scale-110">
                      {React.createElement(skill.icon, { size: "1.5em" })}
                    </div>
                    <span className="text-xs mt-1 text-muted-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
        <div className="flex items-center justify-end w-full mt-8">
          <BackToTop />
        </div>
      </div>
    </Section>
  )
}

export default Skills
