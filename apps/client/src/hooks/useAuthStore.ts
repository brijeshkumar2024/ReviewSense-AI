import { create } from 'zustand';

interface AuthState {
  token: string | null;
  userName: string | null;
  plan: 'free' | 'premium';
  setSession: (token: string, userName: string, plan: 'free' | 'premium') => void;
  clearSession: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userName: null,
  plan: 'free',
  setSession: (token, userName, plan) => set({ token, userName, plan }),
  clearSession: () => set({ token: null, userName: null, plan: 'free' })
}));

export default useAuthStore;
