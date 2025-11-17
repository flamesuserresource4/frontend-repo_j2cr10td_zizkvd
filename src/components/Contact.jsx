import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact & Connect</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <form
            action="https://formspree.io/f/mnnzykdg"
            method="POST"
            className="bg-gray-50 rounded-xl p-6 shadow"
            onSubmit={() => setStatus('Thanks! I\'ll get back to you soon.')}
          >
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="email" name="email" required placeholder="Your email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea name="message" required placeholder="Your message" rows="5" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition" type="submit">
                Send Message
              </button>
              {status && <p className="text-green-700 font-medium">{status}</p>}
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-gray-700">Prefer to connect elsewhere?</p>
            <ul className="space-y-2 text-blue-700">
              <li><a className="underline underline-offset-4" href="https://github.com/isaewwxx" target="_blank" rel="noreferrer">GitHub: isaewwxx</a></li>
              <li><a className="underline underline-offset-4" href="https://instagram.com/isaewwxx" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="underline underline-offset-4" href="https://tiktok.com/@isaewwxx" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a className="underline underline-offset-4" href="https://revolut.me/isaewwxx" target="_blank" rel="noreferrer">Revolut</a></li>
              <li><span className="text-gray-800">Discord:</span> <span className="font-mono">251627016292401154</span></li>
              <li><a className="underline underline-offset-4" href="mailto:webmaster@isaewwxx.xyz">webmaster@isaewwxx.xyz</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
