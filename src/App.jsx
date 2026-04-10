import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <div className="hr-gold max-w-6xl mx-auto" />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d0a05' }}>
      <HomePage />
    </div>
  )
}
