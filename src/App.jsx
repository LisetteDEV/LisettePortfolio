import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUI from './components/ScrollUI'
import Divider from './components/Divider'

function App() {
  return (
    <div className="bg-[#0D0D0D] text-[#F5F5F5] font-sans">
      <ScrollUI />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Services />
        <Divider />
        <Projects />
        <Divider />
        <FAQ />
        <Marquee />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App