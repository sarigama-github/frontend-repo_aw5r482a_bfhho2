import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Building playful, modern experiences
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              I craft interactive products at the intersection of design and engineering. Dive into selected work and experiments below.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors">View Work</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
