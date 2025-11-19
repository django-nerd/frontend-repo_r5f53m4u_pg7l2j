import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let’s build something</h2>
            <p className="text-slate-300 max-w-prose">Tell me about your project, a system you need to scale, or an idea you want to prototype. I’ll reply within 1–2 business days.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@domain.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are we building?" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-500/90 text-white font-semibold px-5 py-3 transition-colors">Send</button>
              <p className="text-sm text-slate-300">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
