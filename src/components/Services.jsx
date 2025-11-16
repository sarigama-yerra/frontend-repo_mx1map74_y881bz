import { Camera, Users, MessageCircleMore, Bot, BarChart3, Newspaper, Map, Megaphone, Rocket, LineChart, Grid3X3 } from 'lucide-react'
import HoloCard from './HoloCard'

const Section = ({ title, children }) => (
  <div className="mt-12">
    <h3 className="text-xl font-bold text-white/90 mb-4" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>{title}</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {children}
    </div>
  </div>
)

export default function Services() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_0%,rgba(53,244,255,0.1),transparent),radial-gradient(700px_300px_at_100%_100%,rgba(106,71,255,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>Solutions</h2>

        <Section title="Civic-Tech Services">
          <HoloCard title="Voter Awareness System" subtitle="3D glowing information cards" icon={Megaphone}>
            Engage citizens with interactive, localized content.
          </HoloCard>
          <HoloCard title="Election Information Dashboard" subtitle="3D charts & analytics panels" icon={BarChart3}>
            Real-time stats, turnout, parties and issues.
          </HoloCard>
          <HoloCard title="Candidate & Party Explorer" subtitle="3D rotating candidate cards" icon={Users}>
            Discover candidates, manifestos and track records.
          </HoloCard>
          <HoloCard title="Public Grievance & Issue Tracker" subtitle="3D interactive map" icon={Map}>
            Geo-tagged issues, statuses and resolutions.
          </HoloCard>
          <HoloCard title="Community Discussion Zone" subtitle="3D chat bubbles" icon={MessageCircleMore}>
            Safe, moderated community talk.
          </HoloCard>
          <HoloCard title="Local News & Alerts" subtitle="3D notification cards" icon={Newspaper}>
            Verified updates for your ward and state.
          </HoloCard>
        </Section>

        <Section title="Media & Digital Services">
          <HoloCard title="Social Media Management" subtitle="FB, IG, YouTube — hologram dashboards" icon={Rocket}>
            Content creation, reels, page management and ads.
          </HoloCard>
          <HoloCard title="Booth Management (Events & Elections)" subtitle="3D event booth models" icon={Grid3X3}>
            Setup, helpdesks, corporate stalls and ground teams.
          </HoloCard>
          <HoloCard title="Photography & Videography" subtitle="Glowing camera & sample reels" icon={Camera}>
            Events, studio, outdoor, product and drone coverage.
          </HoloCard>
        </Section>
      </div>
    </section>
  )
}
