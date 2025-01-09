import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Separator from "./components/Separator"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <Separator withMargin={false} />
      <div
        style={{
          backgroundColor: `rgb(var(--background) / var(--bg-opacity))`,
        }}
        className="rounded-xl p-8"
      >
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Education />
        <Separator />
        <Skills />
      </div>
      <Footer />
    </>
  )
}
