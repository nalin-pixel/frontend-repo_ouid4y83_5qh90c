import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Loader2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const addToCart = (p) => {
    setCart((c) => {
      const existing = c.find((i) => i._id === p._id)
      if (existing) {
        return c.map((i) => (i._id === p._id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...c, { ...p, qty: 1 }]
    })
  }

  return (
    <section id="shop" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Shop the collection</h2>
            <p className="text-gray-600 mt-2">Minimal pieces in recycled silver and gold.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            <span className="text-sm">{cart.reduce((a, i) => a + i.qty, 0)} items</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20 text-gray-600">
            <Loader2 className="h-5 w-5 animate-spin mr-2" /> Loading products...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {products.map((p) => (
                <motion.div
                  key={p._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-2xl border border-gray-200 bg-white overflow-hidden"
                >
                  <div className="aspect-square bg-gray-100" />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{p.title}</h3>
                      <span className="text-gray-900">${p.price?.toFixed?.(2) || '—'}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
                    <button onClick={() => addToCart(p)} className="mt-4 w-full rounded-xl bg-emerald-600 text-white py-2.5 hover:bg-emerald-700 transition">
                      Add to cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}
