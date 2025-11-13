import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Hand-set stones',
    desc: 'Meticulous precision for lasting brilliance.',
  },
  {
    title: 'Recycled metals',
    desc: 'Sustainably sourced gold and silver.',
  },
  {
    title: 'Lifetime care',
    desc: 'Complimentary polishing and resizing.',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              Craft you can trust
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Precision-crafted for everyday wear</h2>
            <p className="text-gray-600">
              Every piece is hand finished in our workshop, combining timeless techniques with modern technologies.
            </p>
            <ul className="grid sm:grid-cols-3 gap-4">
              {items.map((it, idx) => (
                <li key={idx} className="rounded-2xl border border-gray-200 p-4">
                  <p className="font-medium text-gray-900">{it.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner"
          >
            <div className="h-full w-full rounded-3xl bg-[radial-gradient(60%_80%_at_50%_20%,rgba(16,185,129,0.25),rgba(0,0,0,0))]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
