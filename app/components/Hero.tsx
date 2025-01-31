import Image from "next/image"
import React from "react"
import ShinyText from "./ShinyText/ShinyText"
import ElasticLine from "./fancy/elastic-line"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="rounded-full px-2 pt-2 bg-primary-foreground animate-blurred-fade-in">
        <Image
          src="/luka.png"
          alt="Profile picture"
          priority
          className="rounded-full"
          width={160}
          height={160}
        />
      </div>

      <div className="text-center relative">
        <div className="lg:text-4xl text-3xl font-black text-foreground mt-10 mb-6 animate-blurred-fade-in">
          <h1
            style={{
              backgroundColor: `rgb(var(--background) / var(--bg-opacity))`,
            }}
            className="p-4 rounded-full relative"
          >
            Luka Liuzzi
            <div className="absolute left-0 top-0">
              <ElasticLine
                releaseThreshold={50}
                strokeWidth={1}
                animateInTransition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: 0.15,
                }}
              />
            </div>
          </h1>
        </div>
        <h2 className="font-medium rounded-3xl border border-border bg-primary-foreground py-2 text-md animate-blurred-fade-in">
          <ShinyText
            text="Software Developer"
            disabled={false}
            speed={3}
            className="text-lg"
          />
        </h2>
      </div>
      <div
        className="flex justify-center items-center mt-10 gap-4 p-4 rounded-full animate-blurred-fade-in"
        style={{
          backgroundColor: `rgb(var(--background) / var(--bg-opacity))`,
        }}
      >
        <a
          href="https://github.com/lukaliuzzi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 border border-border rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/lukaliuzzi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 border border-border rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="mailto:lukaliuzzidev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 border border-border rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
