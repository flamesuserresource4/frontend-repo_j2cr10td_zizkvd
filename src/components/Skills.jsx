import React from 'react'

const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 60 },
  { name: 'Discord.js', level: 50 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Skills</h2>
        <div className="mt-8 grid gap-6 max-w-3xl">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{s.name}</span>
                <span className="text-gray-600">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
