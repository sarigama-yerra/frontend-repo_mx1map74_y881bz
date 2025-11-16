import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

function App() {
  return (
    <div className="min-h-screen bg-[#05060A] text-white relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,175,255,0.12),transparent),radial-gradient(900px_500px_at_0%_120%,rgba(106,71,255,0.12),transparent)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Dashboard />
      </main>

      <Footer />

      <MobileNav />
    </div>
  )
}

export default App
