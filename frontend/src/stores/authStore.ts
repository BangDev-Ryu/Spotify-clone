import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

// Mock authentication - in a real app, this would connect to Django backend
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {  // Simple validation for demo
          const user = {
            id: '1',
            name: 'John Doe',
            email: email
          };
          
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', 'mock-token-12345');
          
          set({ user, isAuthenticated: true });
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },
  
  register: async (name, email, password) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          id: '1',
          name,
          email
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', 'mock-token-12345');
        
        set({ user, isAuthenticated: true });
        resolve();
      }, 500);
    });
  },
  
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },
  
  checkAuth: () => {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (userStr && token) {
      try {
        const user = JSON.parse(userStr);
        set({ user, isAuthenticated: true });
      } catch (error) {
        console.error('Failed to parse user data');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }
}));