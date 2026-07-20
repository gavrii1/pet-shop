import { Truck, RotateCcw, Lock, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Швидка доставка',
    description: 'Доставляємо по всій Україні за 2-3 дні',
  },
  {
    icon: RotateCcw,
    title: 'Повернення товару',
    description: '14 днів на повернення без питань',
  },
  {
    icon: Lock,
    title: 'Безпечна оплата',
    description: 'Захищена оплата всіма способами',
  },
  {
    icon: Headphones,
    title: 'Підтримка 24/7',
    description: 'Ми завжди готові допомогти вам',
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          Чому обирають нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-shadow p-6 text-center hover:shadow-soft-md transition-smooth"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}