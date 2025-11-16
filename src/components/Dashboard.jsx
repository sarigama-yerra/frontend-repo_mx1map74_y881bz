import { motion } from 'framer-motion'
import HoloCard from './HoloCard'

function Metric({ label, value }) {
  return (
    <div className="relative rounded-2xl p-5 bg-white/5 border border-cyan-300/20 text-white/90 backdrop-blur-xl">
      <div className="text-cyan-200/70 text-sm">{label}</div>
      <div className="text-3xl font-extrabold mt-1" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>{value}</div>
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(53,244,255,0.15)_inset]" />
    </div>
  )
}

export default function Dashboard() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-10%,rgba(0,175,255,0.12),transparent),radial-gradient(700px_300px_at_80%_120%,rgba(106,71,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>3D Dashboard</h2>
        <div className="grid md:grid-cols-4 gap-5 mt-6">
          <Metric label="Election Countdown" value="12d : 06h : 24m" />
          <Metric label="Projected Turnout" value="68%" />
          <Metric label="States Covered" value="28 + UTs" />
          <Metric label="Issues Raised" value="1,254" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <HoloCard title="State-wise Heatmap" subtitle="Interactive intensity">
            <div className="h-64 rounded-xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-white/10" />
          </HoloCard>
          <HoloCard title="Live Metrics" subtitle="Floating widgets">
            <div className="grid grid-cols-2 gap-3">
              <Metric label="Booths Managed" value="312" />
              <Metric label="Media Campaigns" value="42" />
              <Metric label="Video Shoots" value="19" />
              <Metric label="Ad Reach" value="2.1M" />
            </div>
          </HoloCard>
        </div>
      </div>
    </section>
  )
}
