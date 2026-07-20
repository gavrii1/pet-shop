import { Review } from '@/types'
import { Star, Verified } from 'lucide-react'

interface ReviewItemProps {
  review: Review
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-neutral-200 text-neutral-200'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="border-b border-neutral-100 py-6 last:border-b-0">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-neutral-900">{review.author}</h4>
            {review.verified && (
              <div className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                <Verified size={12} />
                Перевірена покупка
              </div>
            )}
          </div>
          <p className="text-xs text-neutral-500">
            {new Date(review.createdAt).toLocaleDateString('uk-UA')}
          </p>
        </div>
        {renderStars(review.rating)}
      </div>

      <h5 className="font-semibold text-neutral-900 mb-2">{review.title}</h5>
      <p className="text-neutral-700 text-sm leading-relaxed">{review.comment}</p>
    </div>
  )
}