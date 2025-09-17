export interface Course {
  id: number | string
  title: string
  description?: string
  duration?: string
  cover: string
  rating: number
  ratingCount: number
  price?: number
  category: string
}
