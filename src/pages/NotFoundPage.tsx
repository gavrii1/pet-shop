import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Сторінка не знайдена - PetShop</title>
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-8xl mb-8">🐾</div>

        <h1 className="text-5xl font-bold text-neutral-900 mb-4">
          404
        </h1>

        <p className="text-2xl text-neutral-600 mb-8">
          Сторінка не знайдена
        </p>

        <p className="text-neutral-600 mb-12 max-w-md mx-auto">
          На жаль, сторінка, яку ви шукаєте, не існує. Вона могла бути видалена або переміщена.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            На головну
          </Link>
          <Link to="/catalog" className="btn-outline">
            До каталогу
          </Link>
        </div>
      </div>
    </>
  )
}