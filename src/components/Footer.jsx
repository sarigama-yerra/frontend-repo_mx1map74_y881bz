export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/80">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="font-bold text-white" style={{ fontFamily: 'Orbitron, ui-sans-serif' }}>VoteRaise</div>
            <p className="text-sm mt-2">© 2025 VoteRaise Media Solution Pvt. Ltd.</p>
            <p className="text-xs text-white/60 mt-1">CIN: U99999XX2025PTC000000</p>
          </div>
          <div>
            <div className="font-semibold text-white">Quick Links</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>3D Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Email: info@voteraise.in</li>
              <li>Phone: +91-98765-43210</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Legal</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
