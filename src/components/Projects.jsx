import React from 'react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'Full‑stack web app with presence, comments, and live sync. Containerized and deployed on Kubernetes with CI/CD.',
    tags: ['React', 'FastAPI', 'WebSockets', 'K8s', 'CI/CD'],
    link: '#'
  },
  {
    title: 'Infra as Code Platform',
    description: 'Self‑service environments provisioned via Terraform pipelines. Policy‑as‑code, audit, and cost guardrails.',
    tags: ['Terraform', 'GitHub Actions', 'AWS', 'OPA'],
    link: '#'
  },
  {
    title: 'Creative 3D Microsite',
    description: 'Interactive Spline scenes, WebGL transitions, and crisp performance with Vite + Tailwind.',
    tags: ['Spline', 'WebGL', 'Vite', 'Tailwind'],
    link: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-blue-300 hover:text-white transition-colors">Need something similar?</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-200">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/60 border border-white/10 text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
