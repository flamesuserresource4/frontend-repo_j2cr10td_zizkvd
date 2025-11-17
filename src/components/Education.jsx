import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Education</h2>
        <div className="mt-6 max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-800">National High School in Finance and Business</h3>
          <p className="text-gray-600">2021 – present</p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li>Object-Oriented Programming</li>
            <li>Advanced English</li>
            <li>Databases</li>
            <li>Entrepreneurship</li>
          </ul>
          <a href="https://www.nsfbg.com/" target="_blank" rel="noreferrer" className="mt-4 inline-block text-blue-700 underline underline-offset-4">Visit school website</a>
        </div>
      </div>
    </section>
  )
}
