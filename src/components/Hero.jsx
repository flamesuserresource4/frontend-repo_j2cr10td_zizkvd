import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>
      <div className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl backdrop-blur-sm bg-white/60 dark:bg-black/40 rounded-2xl p-8 shadow-xl">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Portfolio</p>
            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Georgi Isaev
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-gray-700">
              18-year-old full‑stack developer & Discord bot builder from Sofia.
            </p>
            <p className="mt-4 text-gray-600">
              I craft engaging web experiences and reliable Discord automations. Currently studying Economic Informatics and constantly experimenting with new ideas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#journey" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition">
                View My Journey
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 font-semibold text-gray-800 ring-1 ring-gray-300 hover:bg-white transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
