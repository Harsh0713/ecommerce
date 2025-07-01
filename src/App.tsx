import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CartPanel } from './components/CartPanel';
import { AddProductForm } from './components/AddProductForm';
import { useThemeStore } from './store/useThemeStore';
import Footer  from './components/Footer';

function App() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const { setTheme } = useThemeStore();

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark);
    }
  }, [setTheme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-500">
      <Header onAddProductClick={() => setIsAddProductOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Discover Amazing Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Browse our curated collection of premium items
          </p>
        </div>
        
        <ProductGrid />
      </main>
      
      <ProductModal />
      <CartPanel />
      <Footer/>
      <AddProductForm
        isOpen={isAddProductOpen}
        onClose={() => setIsAddProductOpen(false)}
      />
    </div>
  );
}

export default App;