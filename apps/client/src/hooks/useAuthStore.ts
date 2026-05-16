import { create } from 'zustand';

interface AuthState {
  token: string | null;
  userName: string | null;
  plan: 'free' | 'premium';
  setSession: (token: string, userName: string, plan: 'free' | 'premium') => void;
  clearSession: () => void;
}

const getStoredSession = (): Pick<AuthState, 'token' | 'userName' | 'plan'> => {
  if (typeof window === 'undefined') {
    return { token: null, userName: null, plan: 'free' };
  }

  const token = window.localStorage.getItem('revora_token') ?? window.localStorage.getItem('reviewsense_token');
  const userName = window.localStorage.getItem('revora_user_name') ?? window.localStorage.getItem('reviewsense_user_name');
  const plan = window.localStorage.getItem('revora_plan') ?? window.localStorage.getItem('reviewsense_plan');

  return {
    token,
    userName,
    plan: plan === 'premium' ? 'premium' : 'free'
  };
};

const useAuthStore = create<AuthState>((set) => ({
  ...getStoredSession(),
  setSession: (token, userName, plan) => {
    window.localStorage.setItem('revora_token', token);
    window.localStorage.setItem('revora_user_name', userName);
    window.localStorage.setItem('revora_plan', plan);
    set({ token, userName, plan });
  },
  clearSession: () => {
    window.localStorage.removeItem('revora_token');
    window.localStorage.removeItem('revora_user_name');
    window.localStorage.removeItem('revora_plan');
    window.localStorage.removeItem('reviewsense_token');
    window.localStorage.removeItem('reviewsense_user_name');
    window.localStorage.removeItem('reviewsense_plan');
    set({ token: null, userName: null, plan: 'free' });
  }
}));

export default useAuthStore;
