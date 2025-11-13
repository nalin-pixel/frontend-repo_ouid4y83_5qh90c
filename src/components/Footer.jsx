export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Crustal Studio — All rights reserved.</p>
          <div className="text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <span className="mx-3">·</span>
            <a href="#" className="hover:text-gray-900">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
