import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d0a05' }}>
      <Navbar />
      <main>
        <Hero />
        <div className="hr-gold max-w-6xl mx-auto" />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
