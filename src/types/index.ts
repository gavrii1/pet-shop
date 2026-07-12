// Product Types
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
}

export interface Brand {
  id: string
  name: string
  logo?: string
  description?: string
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  stock: number
  price?: number
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  oldPrice?: number
  discount?: number
  stock: number
  rating: number
  reviewCount: number
  image: string
  images: string[]
  category: Category
  brand?: Brand
  variants?: ProductVariant[]
  characteristics: Record<string, string>
  createdAt: string
  updatedAt: string
}

// Review Types
export interface Review {
  id: string
  productId: string
  rating: number
  title: string
  comment: string
  author: string
  email: string
  createdAt: string
  verified: boolean
}

export interface CreateReviewDTO {
  productId: string
  rating: number
  title: string
  comment: string
  author: string
  email: string
}

// Cart Types
export interface CartItem {
  id: string
  productId: string
  variantId?: string
  quantity: number
  product: Product
}

// Order Types
export interface OrderItem {
  productId: string
  variantId?: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  orderNumber: string
  items: OrderItem[]
  totalPrice: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'card' | 'cash_on_delivery'
  shippingAddress: ShippingAddress
  customerEmail: string
  createdAt: string
  updatedAt: string
}

export interface ShippingAddress {
  fullName: string
  phone: string
  email: string
  city: string
  department: string
  comments?: string
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  currentPage: number
  pageSize: number
}

export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string>
}

// Filter Types
export interface ProductFilters {
  search?: string
  categoryId?: string
  brandId?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'name' | 'price' | 'rating' | 'newest'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}