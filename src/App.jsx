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
        <div className="hr-gold max-w-6xl mx-auto" />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function FeaturedProjectsPage() {
  return (
    <>
      <Navbar isFeaturedProjectsPage />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const decodedPathname = decodeURIComponent(window.location.pathname).toLowerCase()
  const isFeaturedProjectsPage =
    decodedPathname === '/featured-projects' || decodedPathname === '/featured projects'

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d0a05' }}>
      {isFeaturedProjectsPage ? <FeaturedProjectsPage /> : <HomePage />}
    </div>
  )
}
