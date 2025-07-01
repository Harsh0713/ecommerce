import { create } from 'zustand';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  isDark: false,
  
  toggleTheme: () => {
    const currentTheme = get().isDark;
    const newTheme = !currentTheme;
    
    // Update the DOM class
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update the store
    set({ isDark: newTheme });
    
    // Store preference in localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  },
  
  setTheme: (isDark: boolean) => {
    // Update the DOM class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update the store
    set({ isDark });
    
    // Store preference in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}));