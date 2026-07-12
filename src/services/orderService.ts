import axiosInstance from './api'
import { Order, ShippingAddress, OrderItem } from '@/types'

export interface CreateOrderDTO {
  items: OrderItem[]
  totalPrice: number
  paymentMethod: 'card' | 'cash_on_delivery'
  shippingAddress: ShippingAddress
}

export const orderService = {
  createOrder: async (orderData: CreateOrderDTO) => {
    const response = await axiosInstance.post<Order>('/orders', orderData)
    return response.data
  },

  getOrder: async (id: string) => {
    const response = await axiosInstance.get<Order>(`/orders/${id}`)
    return response.data
  },

  getOrders: async () => {
    const response = await axiosInstance.get<Order[]>('/orders')
    return response.data
  },
}

export default orderService