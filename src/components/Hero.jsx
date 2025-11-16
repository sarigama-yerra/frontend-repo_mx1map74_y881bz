import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-50%,rgba(53,244,255,0.25),transparent),radial-gradient(600px_400px_at_20%_120%,rgba(106,71,255,0.25),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-xl"
            style={{ fontFamily: 'Orbitron, ui-sans-serif' }}
          >
            VoteRaise — Empowering Democracy & Digital Media Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg text-cyan-100/80"
          >
            A comprehensive platform by VoteRaise Media Solution Pvt. Ltd.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/dashboard" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold shadow-[0_0_35px_rgba(53,244,255,0.45)]">
              Track Elections
            </Link>
            <Link to="/services" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border border-cyan-300/40 text-cyan-100 hover:bg-cyan-300/10">
              Explore Services
            </Link>
            <Link to="/issues" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-500 text-white">
              Raise Public Issues
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
