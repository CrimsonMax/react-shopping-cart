import { ReactNode } from 'react'

export type StoreItemsProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export type ShoppingCartProviderProps = {
  children: ReactNode
}

export type ShoppingCartContextProps = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

export type CartItem = {
  id: number
  quantity: number
}