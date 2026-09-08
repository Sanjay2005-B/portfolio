import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function Home() {
  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
