import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const promos = [
  {
    id: 1,
    title: 'Знижка 30% на корм для собак',
    description: 'Спеціальна пропозиція цього тижня',
    discount: '30%',
    color: 'from-primary-400 to-primary-600',
  },
  {
    id: 2,
    title: 'Безплатна доставка від 1000 грн',
    description: 'На всі замовлення цього місяця',
    discount: 'FREE',
    color: 'from-secondary-400 to-secondary-600',
  },
  {
    id: 3,
    title: 'Набір іграшок -20%',
    description: 'Весела колекція для вашого улюбленця',
    discount: '-20%',
    color: 'from-accent-400 to-accent-600',
  },
]

export default function PromoSlider() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          prevEl: '.promo-prev',
          nextEl: '.promo-next',
        }}
        loop
        className="rounded-3xl"
      >
        {promos.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div className={`bg-gradient-to-r ${promo.color} text-white p-8 md:p-12 rounded-3xl`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm md:text-base opacity-90 mb-2">{promo.description}</p>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4">{promo.title}</h3>
                </div>
                <div className="text-5xl md:text-7xl font-bold opacity-80">{promo.discount}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 justify-center mt-6">
        <button className="promo-prev p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-smooth">
          <ChevronLeft className="text-primary-600" />
        </button>
        <button className="promo-next p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-smooth">
          <ChevronRight className="text-primary-600" />
        </button>
      </div>
    </section>
  )
}