import { Link } from 'react-router-dom'
import { useCategories } from '@/hooks/useProducts'
import LoadingSpinner from '@/shared/components/LoadingSpinner'
import ErrorState from '@/shared/components/ErrorState'
import CategoryCard from '@/entities/Category/CategoryCard'

export default function CategoriesSection() {
  const { data: categories, isLoading, error } = useCategories()

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorState message="Не вдалося завантажити категорії" />

  const featuredCategories = categories?.slice(0, 6) || []

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Популярні категорії
        </h2>
        <p className="text-neutral-600">Обирайте товари за категоріями</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {featuredCategories.map((category) => (
          <Link key={category.id} to={`/category/${category.slug}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/catalog" className="btn-primary">
          Переглянути весь каталог
        </Link>
      </div>
    </section>
  )
}