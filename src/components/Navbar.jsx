import { ShoppingCart, Gem } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ onCartOpen }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 px-4 py-3 shadow-sm">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gray-900 font-semibold"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <Gem className="h-5 w-5" />
            </div>
            <span>Crustal Studio</span>
          </motion.a>

          <div className="flex items-center gap-2">
            <a href="#work" className="hidden sm:inline-block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">Work</a>
            <a href="#shop" className="hidden sm:inline-block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">Shop</a>
            <a href="#contact" className="hidden sm:inline-block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            <button
              onClick={onCartOpen}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-50 active:scale-[0.99] transition"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5 text-emerald-600" />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
