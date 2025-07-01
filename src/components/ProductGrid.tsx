import React from 'react';
import { useProductStore } from '../store/useProductStore';
import { ProductCard } from './ProductCard';

export const ProductGrid: React.FC = () => {
 const filteredProducts = useProductStore((state) => state.getFilteredProducts());


  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No products found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};