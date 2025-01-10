import React from "react"
import works from "../../works.json"
import Link from "next/link"
import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPhp,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from "react-icons/si"
import Gravity, { MatterBody } from "@/app/components/fancy/gravity"

const getIconForTechnology = (tech: string) => {
  const techMap: { [key: string]: { icon: React.ElementType; size: number } } =
    {
      javascript: { icon: IoLogoJavascript, size: 24 },
      typescript: { icon: SiTypescript, size: 24 },
      react: { icon: SiReact, size: 24 },
      nextjs: { icon: SiNextdotjs, size: 24 },
      nodejs: { icon: IoLogoNodejs, size: 24 },
      html: { icon: IoLogoHtml5, size: 24 },
      css: { icon: IoLogoCss3, size: 24 },
      tailwindcss: { icon: SiTailwindcss, size: 24 },
      express: { icon: SiExpress, size: 24 },
      php: { icon: SiPhp, size: 24 },
      github: { icon: IoLogoGithub, size: 24 },
      mongodb: { icon: SiMongodb, size: 24 },
      mysql: { icon: SiMysql, size: 24 },
      firebase: { icon: SiFirebase, size: 24 },
    }

  return techMap[tech.toLocaleLowerCase()] || { icon: IoLogoGithub, size: 24 } // Default icon
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = works.find((work) => work.slug === slug)

  return {
    title: `Luka Liuzzi | ${work?.title ?? "Trabajo"}`,
    description: work?.description ?? "Uno de los trabajos que realicé.",
  }
}

const projectsBtnsClassNames =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:border-foreground/25 hover:bg-primary-foreground hover:text-accent-foreground h-9 px-4 py-2 transition-all hover:scale-105 hover:shadow-lg"

export const dynamic = "force-static"
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const Work = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const work = works.find((work) => work.slug === slug)
  const totalWorks = works.length
  const prevWork = works.findIndex((work) => work.slug === slug) - 1
  const nextWork = works.findIndex((work) => work.slug === slug) + 1

  return (
    <div
      className="px-8 rounded-xl relative"
      style={{
        backgroundColor: `rgb(var(--background) / var(--bg-opacity))`,
      }}
    >
      <section className="mt-8 py-8">
        <Link
          href="/works"
          className="group relative flex w-fit cursor-pointer flex-nowrap rounded border border-border py-1.5 pl-7 pr-3 hover:border-foreground/25 hover:bg-primary-foreground duration-300 ease-in-out"
        >
          ← Todos los proyectos
        </Link>
        <div className="mt-10">
          <div className="absolute h-full max-h-[220px] w-full mb-8 top-0 -z-10">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              {work?.stack.map((tech, index) => {
                const IconData = getIconForTechnology(tech)
                const randomX = Math.random() * 60 + 20
                const randomY = Math.random() * 20 + 5
                const bodyType = Math.random() > 0.7 ? "rectangle" : "circle"

                return (
                  <MatterBody
                    key={index}
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    bodyType={bodyType}
                    x={`${randomX}%`}
                    y={`${randomY}%`}
                  >
                    <div
                      className={`p-4 ${
                        bodyType === "circle" ? "rounded-full" : "rounded-md"
                      } bg-background text-foreground border border-border shadow-md`}
                    >
                      <IconData.icon size={IconData.size} />
                    </div>
                  </MatterBody>
                )
              })}
            </Gravity>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/profile.jpg"}
              alt="Profile picture"
              width={40}
              loading="lazy"
              height={40}
              className="h-10 w-auto rounded-full"
            />
            <div>
              <h3 className="text-sm font-semibold">Luka Liuzzi</h3>
              <h4 className="w-fit cursor-pointer text-xs font-normal hover:underline">
                @lukaliuzzi
              </h4>
            </div>
          </div>
        </div>
      </section>
      <article className="mt-10">
        <h1 className="lg:text-4xl text-3xl font-bold text-secondary-foreground">
          {work?.title}
        </h1>
        <div className="border-separate border-border border-b w-full border-dashed my-4"></div>
        <p className="text-base text-muted-foreground mt-5">
          {work?.description}
        </p>
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-muted-foreground mb-1">
            Skills utilizadas en este proyecto:
          </h3>
          <div className=" marquee-container">
            <div className="marquee-content">
              {work?.stack &&
                [...work.stack, ...work.stack].map((tech, index) => (
                  <div key={index} className="mx-4 text-muted-foreground">
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="my-8 flex items-center gap-4 justify-center">
          {work?.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noreferrer"
              className={projectsBtnsClassNames}
            >
              Ver proyecto
            </a>
          )}
          {work?.source && (
            <a
              href={work.source}
              target="_blank"
              rel="noreferrer"
              className={projectsBtnsClassNames}
            >
              Ver código
            </a>
          )}
        </div>
        {work?.image && (
          <Link href={work.url} target="_blank" className="cursor-pointer">
            <Image
              src={work?.image}
              alt={work?.title || "Work image"}
              width={550}
              height={550}
              priority
              className="rounded-lg object-cover mx-auto w-full max-h-[450px] animate-zoom-in animate-duration-500"
            />
          </Link>
        )}
      </article>
      <div className="flex w-full mt-10 gap-4 flex-wrap sm:flex-nowrap">
        {prevWork >= 0 && (
          <Link
            href={`/works/${works[prevWork].slug}`}
            className="group flex gap-2 w-full items-center cursor-pointer rounded border border-border py-1.5 pl-3 pr-7 hover:border-foreground/25 hover:bg-primary-foreground duration-300 ease-in-out"
          >
            <IoIosArrowBack className="text-2xl text-muted-foreground duration-300 ease-in-out" />
            <div className="blend h-full w-full text-left p-2">
              <p className="text-sm uppercase">Anterior</p>
              <h5 className="mt-3 font-semibold">{works[prevWork].title}</h5>
            </div>
          </Link>
        )}
        {nextWork < totalWorks && (
          <Link
            href={`/works/${works[nextWork].slug}`}
            className="group flex w-full gap-2 items-center cursor-pointer rounded border border-border py-1.5 pl-7 pr-3 hover:border-foreground/25 hover:bg-primary-foreground duration-300 ease-in-out"
          >
            <div className="blend h-full w-full text-right p-2">
              <p className="text-sm uppercase">Siguiente</p>
              <h5 className="mt-3 font-semibold">{works[nextWork].title}</h5>
            </div>
            <IoIosArrowForward className="text-2xl text-muted-foreground duration-300 ease-in-out" />
          </Link>
        )}
      </div>
      <div className="flex justify-center items-center mt-10 sm:justify-end">
        <BackToTop />
      </div>
      <Footer />
    </div>
  )
}

export default Work
