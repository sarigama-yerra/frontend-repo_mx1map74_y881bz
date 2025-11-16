import { Menu, Home, Layers, BarChart3, Info, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const nav = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Layers },
    { to: '/dashboard', label: '3D Dashboard', icon: BarChart3 },
    { to: '/about', label: 'About', icon: Info },
    { to: '/contact', label: 'Contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(53,244,255,0.45)]"
              />
              <div>
                <h1 className="text-white font-bold tracking-widest" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>VoteRaise</h1>
                <p className="text-xs text-cyan-200/70">Media Solution Pvt. Ltd.</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {nav.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} className={({isActive}) => `flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isActive ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200' : 'border-white/10 text-white/80 hover:border-cyan-400/30 hover:text-white'}`}>
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-cyan-400/40">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
