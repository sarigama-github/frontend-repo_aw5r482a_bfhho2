import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">YourName</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-1 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
