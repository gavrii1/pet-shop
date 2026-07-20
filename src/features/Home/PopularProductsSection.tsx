import { Link } from 'react-router-dom'
import { useProducts } from '@/hooks/useProducts'
import LoadingSpinner from '@/shared/components/LoadingSpinner'
import ErrorState from '@/shared/components/ErrorState'
import ProductCard from '@/entities/Product/ProductCard'

export default function PopularProductsSection() {
  const { data: productsData, isLoading, error } = useProducts({
    limit: 8,
    sortBy: 'rating',
  })

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorState message="Не вдалося завантажити товари" />

  const products = productsData?.content || []

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Популярні товари
        </h2>
        <p className="text-neutral-600">Найбільш популярні товари серед наших покупців</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/catalog" className="btn-secondary">
          Переглянути усі товари
        </Link>
      </div>
    </section>
  )
}