import { Star, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Product } from '@/types'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product, 1)
    toast.success('Товар додано до кошика!')
  }

  const discount = product.discount ? Math.round(product.discount) : 0

  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative mb-4 overflow-hidden rounded-2xl bg-neutral-100 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault()
              // TODO: Add to wishlist
            }}
            className="absolute top-3 left-3 p-2 bg-white rounded-full hover:bg-neutral-100 transition-smooth"
          >
            <Heart size={20} className="text-neutral-400" />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-900 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium text-neutral-700">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-neutral-500">({product.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <span className="text-lg font-bold text-neutral-900">
              {product.price} ₴
            </span>
            {product.oldPrice && (
              <span className="text-sm text-neutral-500 line-through">
                {product.oldPrice} ₴
              </span>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={handleAddToCart}
        className="w-full mt-4 btn-primary text-sm"
      >
        До кошика
      </button>
    </div>
  )
}