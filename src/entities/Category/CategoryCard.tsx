import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
}

const getCategoryEmoji = (name: string): string => {
  const emojiMap: Record<string, string> = {
    собаки: '🐕',
    кошки: '🐈',
    птицы: '🦜',
    рыбки: '🐠',
    грызуны: '🐹',
    кролики: '🐰',
    корм: '🍖',
    игрушки: '🎾',
    аксессуары: '🎀',
  }

  return Object.entries(emojiMap).find(([key]) =>
    name.toLowerCase().includes(key)
  )?.[1] || '🐾'
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="card-shadow p-6 text-center hover:shadow-soft-md transition-smooth group cursor-pointer">
      <div className="text-4xl mb-3">
        {getCategoryEmoji(category.name)}
      </div>
      <h3 className="font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors line-clamp-2">
        {category.name}
      </h3>
    </div>
  )
}