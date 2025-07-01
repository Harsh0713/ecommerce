import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;

  // Selectors (computed)
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product: Product) => {
    const { items } = get();
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set({ items: updatedItems });
    } else {
      set({
        items: [...items, { id: product.id, product, quantity: 1 }],
      });
    }
  },

  removeItem: (id: string) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  updateQuantity: (id: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }

    const updatedItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    set({ items: updatedItems });
  },

  clearCart: () => {
    set({ items: [] });
  },

  toggleCart: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },

  // 🧠 Computed values
  getTotalPrice: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),

  getTotalItems: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),
}));
