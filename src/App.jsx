import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Shop from './components/Shop'
import Footer from './components/Footer'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Showcase />
        <Shop />
      </main>
      <Footer />
    </div>
  )
}

export default App
