import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { CartItem, Product } from '../interfaces/products.interface';

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    cartItems: [],

    addToCart: (product: Product) => {
      set((state: { cartItems: CartItem[] }) => {
        const existingItem = state.cartItems.find((item) => item.productId === product.id);
        if (existingItem) {
          return {
            cartItems: state.cartItems.map((item) =>
              item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { cartItems: [...state.cartItems, { productId: product.id, quantity: 1, product }] };
      });
    },

    removeFromCart: (productId: number) => {
      set((state: { cartItems: CartItem[] }) => {
        const cartItems = state.cartItems.filter((item) => item.productId !== productId);
        return { cartItems };
      });
    },
    clearCart: () => {
      set((state: { cartItems: CartItem[] }) => ({
        cartItems: [],
      }));
    },
  }))
);
