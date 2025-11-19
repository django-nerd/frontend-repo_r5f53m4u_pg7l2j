import React from 'react'

const roles = [
  {
    company: 'TechScale Cloud',
    role: 'Senior DevOps Engineer',
    period: '2022 — Present',
    bullets: [
      'Scaled Kubernetes platform to 200+ services with GitOps.',
      'Cut deploy time from 25min to 6min with progressive delivery.',
      'Centralized observability: OpenTelemetry + Grafana.'
    ]
  },
  {
    company: 'Product Forge',
    role: 'Full‑Stack Engineer',
    period: '2020 — 2022',
    bullets: [
      'Built React + FastAPI apps used by 50k+ monthly users.',
      'Led migration to microservices and event‑driven patterns.',
      'Introduced IaC, automated environments, and preview apps.'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience</h2>
        <div className="space-y-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <h3 className="text-xl font-semibold text-white">{r.role} · <span className="text-blue-300">{r.company}</span></h3>
                <span className="text-sm text-slate-300">{r.period}</span>
              </div>
              <ul className="text-slate-300 text-sm list-disc pl-5 space-y-1">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
