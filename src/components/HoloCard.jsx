import { motion } from 'framer-motion'

export default function HoloCard({ title, subtitle, icon: Icon, children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 0 40px rgba(53,244,255,0.25), 0 0 80px rgba(106,71,255,0.15)' }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-blue-500/10" />
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top_left,rgba(53,244,255,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(106,71,255,0.15),transparent_40%)] animate-flame" />
      <div className="relative flex items-start gap-4">
        {Icon && (
          <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 shadow-[0_0_30px_rgba(53,244,255,0.25)]">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="">
          {title && <h3 className="font-semibold text-white/90 tracking-wide" style={{ fontFamily: 'Orbitron, ui-sans-serif, system-ui' }}>{title}</h3>}
          {subtitle && <p className="text-cyan-200/70 text-sm mt-0.5">{subtitle}</p>}
          {children && <div className="mt-3 text-white/80 text-sm leading-relaxed">{children}</div>}
        </div>
      </div>
    </motion.div>
  )
}
