import React from 'react'

const milestones = [
  {
    year: '2021',
    title: 'First Discord Bot',
    desc: 'Built my first bot and learned the foundations of JavaScript and APIs.',
    tech: ['JavaScript', 'discord.js']
  },
  {
    year: '2022',
    title: 'Aegis Bot',
    desc: 'Launched Aegis Bot focused on moderation and utilities for servers.',
    tech: ['Node.js', 'discord.js', 'MongoDB']
  },
  {
    year: '2022–2024',
    title: 'Growth & Iteration',
    desc: 'Shipped features, improved reliability, and learned modern front‑end tooling.',
    tech: ['React', 'Tailwind', 'REST']
  },
  {
    year: '2025',
    title: 'CapybaraHost',
    desc: 'Explored hosting product ideas and infrastructure basics.',
    tech: ['Docker', 'Linux', 'CI/CD']
  },
  {
    year: '2025',
    title: 'Infininode (Concept)',
    desc: 'Early concept around scalable node management and automation.',
    tech: ['Concept Design']
  }
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Journey</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gray-300" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-10 sm:pl-14 md:pl-16">
                <div className="absolute left-1.5 sm:left-3.5 md:left-5 top-2 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center gap-3 text-sm text-blue-700 font-semibold">
                    <span>{m.year}</span>
                    <span className="text-gray-300">•</span>
                    <span>{m.title}</span>
                  </div>
                  <p className="mt-3 text-gray-700">{m.desc}</p>
                  {m.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 text-sm text-gray-500">
                    <a href="#details" className="hover:text-blue-700 underline underline-offset-4">View details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
