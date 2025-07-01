import { create } from 'zustand';
import { Product } from '../types';
import { sampleProducts } from '../data/products';

interface ProductStore {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  selectedProduct: Product | null;

  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  setSearch: (query: string) => void;
  setCategory: (category: string) => void;
  setSelectedProduct: (product: Product | null) => void;

  getFilteredProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: sampleProducts,
  searchQuery: '',
  selectedCategory: '',
  selectedProduct: null,

  setProducts: (products: Product[]) => {
    set({ products });
  },

  addProduct: (product: Product) => {
    set({
      products: [...get().products, product]
    });
  },

  setSearch: (query: string) => {
    set({ searchQuery: query });
  },

  setCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  setSelectedProduct: (product: Product | null) => {
    set({ selectedProduct: product });
  },

  getFilteredProducts: () => {
    const { products, searchQuery, selectedCategory } = get();

    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === '' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }
}));
