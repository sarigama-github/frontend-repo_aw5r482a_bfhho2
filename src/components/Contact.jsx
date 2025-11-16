import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const form = new FormData(e.currentTarget)
      const payload = Object.fromEntries(form)

      // Mock send - replace with your backend endpoint later
      await new Promise((r) => setTimeout(r, 800))

      setStatus('Thanks! I will get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-3 text-gray-700">Questions, collaborations, or opportunities—drop a note and I’ll reply.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input name="name" required placeholder="Jane Doe" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required placeholder="jane@email.com" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell me about your idea..." className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors">
              <Send className="h-4 w-4" />
              Send message
            </button>
            <p className="text-sm text-gray-600">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
