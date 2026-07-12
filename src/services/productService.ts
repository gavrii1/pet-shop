import axiosInstance from './api'
import { Product, Category, Brand, PaginatedResponse, ProductFilters, Review, CreateReviewDTO } from '@/types'

export const productService = {
  // Categories
  getCategories: async () => {
    const response = await axiosInstance.get<Category[]>('/categories')
    return response.data
  },

  getCategory: async (id: string) => {
    const response = await axiosInstance.get<Category>(`/categories/${id}`)
    return response.data
  },

  // Products
  getProducts: async (filters?: ProductFilters) => {
    const params = {
      page: filters?.page || 0,
      size: filters?.limit || 12,
      search: filters?.search,
      categoryId: filters?.categoryId,
      brandId: filters?.brandId,
      minPrice: filters?.minPrice,
      maxPrice: filters?.maxPrice,
      sort: filters?.sortBy,
      sortOrder: filters?.sortOrder,
    }

    const response = await axiosInstance.get<PaginatedResponse<Product>>('/products', { params })
    return response.data
  },

  getProduct: async (id: string) => {
    const response = await axiosInstance.get<Product>(`/products/${id}`)
    return response.data
  },

  searchProducts: async (query: string, limit = 10) => {
    const response = await axiosInstance.get<Product[]>('/products/search', {
      params: { q: query, limit },
    })
    return response.data
  },

  getProductsByCategory: async (categoryId: string, filters?: ProductFilters) => {
    const params = {
      page: filters?.page || 0,
      size: filters?.limit || 12,
      ...filters,
    }

    const response = await axiosInstance.get<PaginatedResponse<Product>>(`/products/category/${categoryId}`, { params })
    return response.data
  },

  // Reviews
  getProductReviews: async (productId: string, page = 0, size = 10) => {
    const response = await axiosInstance.get<PaginatedResponse<Review>>(`/reviews/product/${productId}`, {
      params: { page, size },
    })
    return response.data
  },

  createReview: async (review: CreateReviewDTO) => {
    const response = await axiosInstance.post<Review>('/reviews', review)
    return response.data
  },

  // Brands
  getBrands: async () => {
    const response = await axiosInstance.get<Brand[]>('/brands')
    return response.data
  },
}

export default productService