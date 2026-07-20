import { Link } from 'react-router-dom'
import { Heart, Users, Lightbulb } from 'lucide-react'

export default function VolunteerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ❤️ Благодійність
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Волонтерська діяльність
            </h2>

            <p className="text-neutral-600 mb-6 leading-relaxed">
              Ми активно підтримуємо притулки для тварин та благодійні фонди. Частину прибутку від кожного замовлення ми спрямовуємо на допомогу безпритульним тваринам.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Допомога тваринам</h4>
                  <p className="text-neutral-600 text-sm">Прямо від кожного замовлення</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Волонтерська команда</h4>
                  <p className="text-neutral-600 text-sm">Приєднуйтесь до нас</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Освітня діяльність</h4>
                  <p className="text-neutral-600 text-sm">Навчаємо правильному догляду</p>
                </div>
              </div>
            </div>

            <Link to="/volunteer" className="btn-primary">
              Дізнатися більше
            </Link>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <div className="text-6xl">🤝</div>
          </div>
        </div>
      </div>
    </section>
  )
}