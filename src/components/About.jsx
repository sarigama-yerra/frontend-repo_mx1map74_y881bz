import { motion } from 'framer-motion'
import HoloCard from './HoloCard'

export default function About() {
  const steps = ['Information', 'Awareness', 'Participation', 'Impact', 'Growth']

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(0,175,255,0.12),transparent),radial-gradient(600px_300px_at_90%_90%,rgba(106,71,255,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <HoloCard title="About VoteRaise" subtitle="Inspiring civic participation with modern media">
            <p>
              VoteRaise Media Solution Pvt. Ltd. promotes civic awareness and delivers cutting-edge digital media solutions.
            </p>
          </HoloCard>
          <div className="grid sm:grid-cols-5 gap-3">
            {steps.map((s, i) => (
              <motion.div key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl p-4 text-center bg-white/5 border border-cyan-300/20 backdrop-blur-xl text-white/80">
                  <div className="text-xs text-cyan-200/70">Step {i + 1}</div>
                  <div className="mt-1 font-semibold" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>{s}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
