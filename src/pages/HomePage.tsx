import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import HeroBanner from '@/features/Home/HeroBanner'
import PromoSlider from '@/features/Home/PromoSlider'
import CategoriesSection from '@/features/Home/CategoriesSection'
import PopularProductsSection from '@/features/Home/PopularProductsSection'
import BenefitsSection from '@/features/Home/BenefitsSection'
import VolunteerSection from '@/features/Home/VolunteerSection'
import BrandsSection from '@/features/Home/BrandsSection'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>PetShop - Все для домашніх улюбленців</title>
        <meta name="description" content="Інтернет-магазин товарів для домашніх улюбленців з доставкою по Україні" />
        <meta property="og:title" content="PetShop - Все для домашніх улюбленців" />
        <meta property="og:description" content="Інтернет-магазин товарів для домашніх улюбленців" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroBanner />
      <PromoSlider />
      <CategoriesSection />
      <PopularProductsSection />
      <BenefitsSection />
      <VolunteerSection />
      <BrandsSection />
    </>
  )
}