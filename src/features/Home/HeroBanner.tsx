import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
              🎉 Нові акції кожного дня
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Все для вашого <span className="text-primary-500">улюбленця</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Найбільший вибір корму, іграшок, аксесуарів та товарів для здоров'я домашніх тварин з доставкою по всій Україні.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/catalog"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Перейти до каталогу
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/volunteer"
                className="btn-outline inline-flex items-center justify-center"
              >
                Про волонтерство
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl opacity-30"></div>
            <div className="text-8xl md:text-9xl animate-bounce">🐾</div>
          </div>
        </div>
      </div>
    </section>
  )
}