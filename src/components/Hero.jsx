import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Bespoke jewelry design & artisan craftsmanship
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Timeless craft, modern edge
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We design and handcraft minimal pieces with character. Explore our signature collection and commission exclusive custom works.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm hover:bg-emerald-700 transition">Shop collection</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition">View craft</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
