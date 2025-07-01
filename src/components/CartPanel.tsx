import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const CartPanel: React.FC = () => {
  const {
  items,
  isOpen,
  toggleCart,
  updateQuantity,
  removeItem,
  clearCart,
  // getTotalPrice,
  getTotalItems
} = useCartStore();

// const totalPrice = getTotalPrice();
const totalItems = getTotalItems();


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={toggleCart}
      />
      
      <div className="w-full max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-l border-white/20 dark:border-gray-700/20 shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
  Shopping Cart ({totalItems})
</h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
              <ShoppingBag className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some products to get started</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-white/20 dark:border-gray-700/20"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white truncate">
                      {item.product.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ₹{item.product.price}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
  <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-4">
    {/** Total Price Calculation */}
    <div className="flex items-center justify-between">
      <span className="text-lg font-semibold text-gray-900 dark:text-white">
        Total: ₹{items.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}
      </span>
      <button
        onClick={clearCart}
        className="text-sm text-red-500 hover:text-red-700 transition-colors duration-300"
      >
        Clear Cart
      </button>
    </div>

    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
      Checkout
    </button>
  </div>
)}
      </div>
    </div>
  );
};