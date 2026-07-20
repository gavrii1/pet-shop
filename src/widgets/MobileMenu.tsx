import { Link } from 'react-router-dom'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  onClose: () => void
  navLinks: NavLink[]
}

export default function MobileMenu({ onClose, navLinks }: MobileMenuProps) {
  return (
    <div className="lg:hidden bg-neutral-50 border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-lg transition-smooth font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}