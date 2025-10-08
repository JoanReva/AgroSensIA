'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Qué ofrecemos?', href: '#que-ofrecemos' },
    { name: '¿Cómo funciona?', href: '#como-funciona' },
    { name: '¿Qué hacemos?', href: '#que-hacemos' },
    { name: 'Nosotros', href: '#nosotros' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-[#E9F7E5] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#333333] relative">
              AgroSens
              <span className="relative">
                I
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 text-[#00C851]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </span>
              A
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#333333] hover:text-[#00C851] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center space-x-2 text-[#333333] hover:text-[#00C851] transition-colors">
              <span className="text-xl">🇬🇧</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#333333]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#333333] hover:text-[#00C851] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="flex items-center space-x-2 text-[#333333] hover:text-[#00C851] transition-colors w-fit">
                <span className="text-xl">🇬🇧</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}