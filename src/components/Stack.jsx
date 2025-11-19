import React from 'react'
import { Code, Server, Cloud, Boxes } from 'lucide-react'

const skills = [
  {
    icon: <Code className="w-6 h-6 text-blue-400" />, 
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />, 
    title: 'Backend',
    items: ['FastAPI', 'Node/Express', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: <Cloud className="w-6 h-6 text-purple-400" />, 
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS/GCP/Azure']
  },
  {
    icon: <Boxes className="w-6 h-6 text-amber-400" />, 
    title: 'Creative',
    items: ['3D & Spline', 'WebGL', 'Design Systems', 'Prototyping']
  }
]

function Stack() {
  return (
    <section id="stack" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Toolbox</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-4">
                {s.icon}
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="">• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
