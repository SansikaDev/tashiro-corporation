import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/tashiro-it', label: 'Tashiro IT' },
    { path: '/tea-services', label: 'Tea Services' },
    { path: '/import-export', label: 'Import/Export' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="Tashiro Corporation Home"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white/0">
              <img
                src="/assets/Tashiro-foods.webp"
                alt="Tashiro Corporation logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Tashiro Corporation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4 pb-4 border-t border-gray-200' 
              : 'max-h-0 opacity-0 mt-0 pb-0 border-t-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-accent/20'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${isMobileMenuOpen ? 'animate-slide-in-left' : ''}`}
                style={isMobileMenuOpen ? { animationDelay: `${navLinks.indexOf(link) * 0.05}s` } : {}}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-2 transition-transform duration-200 ${
                isMobileMenuOpen ? 'animate-slide-in-left' : ''
              }`}
              style={isMobileMenuOpen ? { animationDelay: `${navLinks.length * 0.05}s` } : {}}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

