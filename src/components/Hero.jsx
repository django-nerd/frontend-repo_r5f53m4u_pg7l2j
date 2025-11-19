import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden flex items-center">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 md:gap-8 py-24 md:py-32">
          <span className="inline-flex items-center w-fit rounded-full border border-blue-300/30 bg-slate-900/40 px-3 py-1 text-xs md:text-sm text-blue-200 backdrop-blur">
            Full‑Stack Developer • DevOps Engineer • Creative Technologist
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            I build reliable apps and the systems that run them.
          </h1>
          <p className="max-w-2xl text-slate-200/90 text-base md:text-lg">
            From idea to production: modern frontends, robust APIs, cloud-native infrastructure, and automation that scales.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-5 py-3 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 border border-white/15 backdrop-blur transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
