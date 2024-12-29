import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Separator from "./components/Separator"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Experience />
      <Separator />
      <Skills />
      <Footer />
    </>
  )
}
