const brands = [
  { id: 1, name: 'Royal Canin' },
  { id: 2, name: 'Pro Plan' },
  { id: 3, name: 'Purina' },
  { id: 4, name: 'Hills' },
  { id: 5, name: 'Acana' },
  { id: 6, name: 'Orijen' },
]

export default function BrandsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
        Популярні бренди
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="card-shadow p-6 flex items-center justify-center text-center hover:shadow-soft-md transition-smooth cursor-pointer"
          >
            <p className="font-bold text-neutral-700">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}