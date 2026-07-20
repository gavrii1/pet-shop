import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import MobileMenu from '@/widgets/MobileMenu'
import CartDrawer from '@/features/Cart/CartDrawer'
import ProductSearch from '@/features/Product/ProductSearch'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const cartCount = useCartStore((state) => state.getCartCount())

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { href: '/', label: 'Головна' },
    { href: '/catalog', label: 'Каталог' },
    { href: '/volunteer', label: 'Волонтерство' },
    { href: '/about', label: 'Про нас' },
    { href: '/contacts', label: 'Контакти' },
  ]

  return (
    <header className="bg-white border-b border-neutral-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-neutral-100">
          <div className="flex gap-6 text-neutral-600">
            <a href="tel:+380123456789" className="hover:text-primary-500 transition-smooth">
              +38 (012) 345-67-89
            </a>
            <a href="mailto:info@petshop.ua" className="hover:text-primary-500 transition-smooth">
              info@petshop.ua
            </a>
          </div>
          <div className="flex gap-4 text-neutral-600">
            <span>Доставка по Україні</span>
            <span>Безплатна доставка від 1000 грн</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              🐾
            </div>
            <span className="hidden sm:block font-bold text-xl text-primary-700">PetShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-smooth font-medium ${
                  isActive(link.href)
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-smooth"
              aria-label="Пошук"
            >
              <Search size={20} className="text-neutral-600" />
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-neutral-100 rounded-lg transition-smooth"
              aria-label="Корзина"
            >
              <ShoppingCart size={20} className="text-neutral-600" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-smooth"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-neutral-600" />
              ) : (
                <Menu size={20} className="text-neutral-600" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-slide-down">
            <ProductSearch onClose={() => setIsSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} navLinks={navLinks} />}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}