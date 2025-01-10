import Link from "next/link"
import works from "../works.json"
import Image from "next/image"
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
import BackToTop from "../components/BackToTop"
import { IconType } from "react-icons"
import Footer from "../components/Footer"

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

export default function Works() {
  return (
    <div
      className="px-8 rounded-xl"
      style={{
        backgroundColor: `rgb(var(--background) / var(--bg-opacity))`,
      }}
    >
      <h1 className="text-center sm:text-lg text-sm text-muted-foreground my-8 pt-8">
        Algunos proyectos en los que trabaje
      </h1>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {works.map((work) => (
          <Link
            className="group relative h-full flex bg-primary-foreground/25 cursor-pointer flex-col items-start justify-center gap-y-3 rounded border border-border duration-300 ease-in-out hover:border-foreground/25 hover:bg-primary-foreground"
            key={work.id}
            href={`/works/${work.slug}`}
          >
            <Image
              src={work.image}
              alt={work.title}
              width={550}
              loading="lazy"
              height={550}
              className="rounded-t-sm h-56 object-cover"
            />
            <div className="flex flex-col items-start justify-start px-5">
              <h2 className="text-xl font-bold">{work.title}</h2>
            </div>
            <div className="marquee-container pb-6 pt-3">
              <div className="marquee-content">
                {[...work.stack, ...work.stack].map((tech, index) => (
                  <span key={index} className="inline-flex items-center mx-4">
                    {skills.Frontend.map((skill) => {
                      if (skill.name === tech) {
                        return (
                          <skill.icon key={tech} className="h-5 w-5 mr-1" />
                        )
                      }
                    })}
                    {skills.Backend.map((skill) => {
                      if (skill.name === tech) {
                        return (
                          <skill.icon key={tech} className="h-5 w-5 mr-1" />
                        )
                      }
                    })}
                    {skills.Others.map((skill) => {
                      if (skill.name === tech) {
                        return (
                          <skill.icon key={tech} className="h-5 w-5 mr-1" />
                        )
                      }
                    })}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
      <div className="flex items-center justify-end w-full my-8">
        <BackToTop />
      </div>
      <Footer />
    </div>
  )
}
