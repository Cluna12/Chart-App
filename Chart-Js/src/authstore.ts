

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');



 /*

import { create } from 'zustand'

const useAuthStore = create((set) => ({
  setAuthData: (authData) => set((state) => ({ authData: authData })),
  authData: null
}))

const SomeComponent = () => {
    const login = useAuthStore((state) => state.login)
    
    ...
    
    login(user,pass)
    
    }

*/