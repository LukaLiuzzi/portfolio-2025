import React from "react"
import works from "../../works.json"
import Link from "next/link"
import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Footer from "@/app/components/Footer"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export async function generateStaticParams() {
  return works.map((work) => ({
    params: {
      slug: work.slug,
    },
  }))
}

const projectsBtnsClassNames =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-border bg-background hover:border-foreground/25 hover:bg-primary-foreground hover:text-accent-foreground h-9 px-4 py-2 transition-all hover:scale-105 hover:shadow-lg"

const Work = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const work = works.find((work) => work.slug === slug)
  const totalWorks = works.length
  const prevWork = works.findIndex((work) => work.slug === slug) - 1
  const nextWork = works.findIndex((work) => work.slug === slug) + 1

  return (
    <div
      className="px-8 rounded-xl"
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
        <div className="mt-5 marquee-container">
          <div className="marquee-content">
            {work?.stack &&
              [...work.stack, ...work.stack].map((tech, index) => (
                <div key={index} className="mx-4 text-muted-foreground">
                  {tech}
                </div>
              ))}
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
              loading="lazy"
              height={550}
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
