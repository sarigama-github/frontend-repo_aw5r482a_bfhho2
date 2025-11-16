import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Playground',
    description: 'A Spline-powered experiment blending real-time motion and UI.',
    tags: ['Spline', 'React', 'Framer Motion'],
    link: 'https://example.com',
  },
  {
    title: 'Design System Explorer',
    description: 'Composable components with delightful micro-interactions.',
    tags: ['Design Systems', 'Accessibility', 'Motion'],
    link: 'https://example.com',
  },
  {
    title: 'Generative Art Lab',
    description: 'Procedural visuals created with code and curiosity.',
    tags: ['Creative Coding', 'Shaders', 'Art'],
    link: 'https://example.com',
  },
]

function Projects() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-50/50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-gray-700">A few projects that capture my vibe—technical, tactile, and a little playful.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </div>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
