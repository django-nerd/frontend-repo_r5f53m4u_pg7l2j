import React from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-bold tracking-tight">dev<span className="text-blue-400">.portfolio</span></a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-4 py-2 transition-colors">
              Let’s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
