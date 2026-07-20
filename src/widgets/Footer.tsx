import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PetShop</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Весь необхідний для домашніх улюбленців асортимент з доставкою по Україні.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Навігація</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="hover:text-primary-400 transition-smooth">
                Головна
              </Link>
              <Link to="/catalog" className="hover:text-primary-400 transition-smooth">
                Каталог
              </Link>
              <Link to="/about" className="hover:text-primary-400 transition-smooth">
                Про нас
              </Link>
              <Link to="/contacts" className="hover:text-primary-400 transition-smooth">
                Контакти
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-4">Контакти</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+380123456789" className="flex items-center gap-2 hover:text-primary-400 transition-smooth">
                <Phone size={16} />
                +38 (012) 345-67-89
              </a>
              <a href="mailto:info@petshop.ua" className="flex items-center gap-2 hover:text-primary-400 transition-smooth">
                <Mail size={16} />
                info@petshop.ua
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                м. Київ, Україна
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Правова інформація</h4>
            <nav className="space-y-2 text-sm">
              <a href="#" className="hover:text-primary-400 transition-smooth">
                Умови використання
              </a>
              <a href="#" className="hover:text-primary-400 transition-smooth">
                Політика приватності
              </a>
              <a href="#" className="hover:text-primary-400 transition-smooth">
                Повернення товару
              </a>
              <a href="#" className="hover:text-primary-400 transition-smooth">
                Доставка і оплата
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
            <p>&copy; {currentYear} PetShop. Усі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}