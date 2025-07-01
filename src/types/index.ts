export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Home';
  stock: number;
  rating: number;
  features: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface AddProductFormData {
  title: string;
  description: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Home';
  imageUrl: string;
  stock: number;
  features: string;
}