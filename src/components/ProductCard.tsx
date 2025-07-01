import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { useProductStore } from '../store/useProductStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group cursor-pointer bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{product.price}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
        
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          {product.stock} in stock
        </div>
      </div>
    </div>
  );
};