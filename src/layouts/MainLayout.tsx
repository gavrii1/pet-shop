import { Outlet } from 'react-router-dom'
import Header from '@/widgets/Header'
import Footer from '@/widgets/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}