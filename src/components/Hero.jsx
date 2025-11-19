import React, { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  // Mouse-based parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [0, 1], [8, -8])
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8])

  const translateSlowX = useTransform(mouseX, [0, 1], [-15, 15])
  const translateSlowY = useTransform(mouseY, [0, 1], [-15, 15])
  const translateMidX = useTransform(mouseX, [0, 1], [-30, 30])
  const translateMidY = useTransform(mouseY, [0, 1], [-30, 30])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  const float = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0, 6, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const title = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const items = useMemo(() => [
    { icon: '⚙️', delay: 0.1 },
    { icon: '🧠', delay: 0.2 },
    { icon: '☁️', delay: 0.3 },
    { icon: '💻', delay: 0.4 },
    { icon: '🚀', delay: 0.5 },
  ], [])

  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden flex items-center bg-slate-950" onMouseMove={handleMouseMove}>
      {/* Background gradients */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-blue-600/25 to-cyan-400/25 blur-3xl"
        style={{ x: translateSlowX, y: translateSlowY }}
      />
      <motion.div
        className="pointer-events-none absolute top-10 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-400/20 blur-3xl"
        style={{ x: translateMidX, y: translateMidY }}
      />

      {/* Decorative floating emojis/icons */}
      {items.map((it, i) => (
        <motion.div
          key={i}
          variants={float}
          initial="initial"
          animate="animate"
          className="pointer-events-none absolute text-2xl md:text-3xl"
          style={{
            x: useTransform(mouseX, [0, 1], [(-120 + i * 60), (120 - i * 60)]),
            y: useTransform(mouseY, [0, 1], [(-80 + i * 35), (80 - i * 35)])
          }}
        >
          {it.icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-10 w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center"
          style={{ rotateX, rotateY }}
        >
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-6 md:p-8 backdrop-blur-md shadow-2xl"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-cyan-300/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Developer portrait"
                  className="w-full aspect-square object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Text + actions */}
          <div>
            <motion.span
              variants={title}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-blue-200/90 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Available for full‑time & freelance
            </motion.span>

            <motion.h1
              variants={title}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
              className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Your Name Here
            </motion.h1>

            <motion.p
              variants={title}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.16 }}
              className="mt-3 text-lg md:text-xl text-slate-300 max-w-2xl"
            >
              Full‑Stack Developer • DevOps Engineer • Creative Technologist
            </motion.p>

            <motion.p
              variants={title}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.22 }}
              className="mt-4 text-slate-300/90 max-w-2xl"
            >
              I design and ship performant web apps, reliable APIs, and cloud‑native platforms. I love clean UI, automation, and DX.
            </motion.p>

            <motion.div
              variants={title}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-5 py-3 transition-colors shadow-lg shadow-blue-500/20">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 border border-white/10 backdrop-blur">
                Contact Me
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a href="#" aria-label="GitHub" className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" aria-label="Email" className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom subtle vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

export default Hero
