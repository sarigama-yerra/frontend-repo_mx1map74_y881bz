import { Home, Layers, BarChart3, Info, MessageSquare } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function MobileNav() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-3xl px-4 pb-4">
        <div className="relative rounded-2xl border border-cyan-400/20 bg-black/50 backdrop-blur-xl">
          <nav className="grid grid-cols-4 divide-x divide-white/5 text-white/80">
            <NavLink to="/" className={({isActive}) => `flex items-center justify-center gap-1 py-3 ${isActive ? 'text-cyan-300' : 'hover:text-white'}`}>
              <Home className="w-5 h-5" />
            </NavLink>
            <NavLink to="/services" className={({isActive}) => `flex items-center justify-center gap-1 py-3 ${isActive ? 'text-cyan-300' : 'hover:text-white'}`}>
              <Layers className="w-5 h-5" />
            </NavLink>
            <NavLink to="/dashboard" className={({isActive}) => `flex items-center justify-center gap-1 py-3 ${isActive ? 'text-cyan-300' : 'hover:text-white'}`}>
              <BarChart3 className="w-5 h-5" />
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `flex items-center justify-center gap-1 py-3 ${isActive ? 'text-cyan-300' : 'hover:text-white'}`}>
              <Info className="w-5 h-5" />
            </NavLink>
          </nav>
        </div>
      </div>

      <NavLink to="/issues" className="fixed right-5 bottom-20 inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-white bg-gradient-to-br from-cyan-500 to-purple-600 shadow-[0_0_35px_rgba(53,244,255,0.5)] border border-white/10">
        <MessageSquare className="w-4 h-4" />
        <span className="font-semibold">Raise Issue</span>
      </NavLink>
    </div>
  )
}
