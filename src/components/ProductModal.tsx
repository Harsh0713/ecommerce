import React, { useState } from 'react';
import { X, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useProductStore } from '../store/useProductStore';
import { useCartStore } from '../store/useCartStore';

export const ProductModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useProductStore();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(selectedProduct);
    }
    setSelectedProduct(null);
    setQuantity(1);
  };

  const updateQuantity = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(selectedProduct.stock, quantity + delta));
    setQuantity(newQuantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setSelectedProduct(null)}
      />
      
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700/20 shadow-2xl">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-xl">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                {selectedProduct.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedProduct.rating} rating
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProduct.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹{selectedProduct.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedProduct.stock} in stock
                </span>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(-1)}
                    disabled={quantity <= 1}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    disabled={quantity >= selectedProduct.stock}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <ShoppingCart className="h-5 w-5" />
                Add {quantity} to Cart - ₹{(selectedProduct.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};