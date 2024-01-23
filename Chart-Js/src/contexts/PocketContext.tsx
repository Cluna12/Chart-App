import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase, { RecordAuthResponse, RecordModel } from "pocketbase";
type PocketContextType = {
  login: (
    email: string,
    password: string
  ) => Promise<RecordAuthResponse<RecordModel>>;
  register: (email: string, password: string) => Promise<RecordModel>;
  logout: () => void;

  user: { [key: string]: unknown } | null;
  pb: PocketBase;
};

const BASE_URL = "http://127.0.0.1:8090";

const PocketContext = createContext<PocketContextType | null>(null);

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setUser(model);
    });
    ``;
  }, []);

  const register = useCallback(async (email: string, password: string) => {
    return await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  return (
    <PocketContext.Provider value={{ register, login, logout, user, pb }}>
      {children}
    </PocketContext.Provider>
  );
};
export const usePocket = () => useContext(PocketContext);

/*
const pb = new PocketBase('https://pocketbase.io');

// sign-up with username/email and password
await pb.collection('users').create({
  email:           'test@example.com',
  password:        '123456',
  passwordConfirm: '123456',
  name:            'John Doe',
});

// sign-in with username/email and password
await pb.collection('users').authWithPassword('test@example.com', '123456');

// sign-in/sign-up with OAuth2 (Google, Facebook, etc.)
await pb.collection('users').authWithOAuth2({
  provider: 'google',
});

// send verification email
await pb.collection('users').requestVerification('test@example.com');

// send password reset email
await pb.collection('users').requestPasswordReset('test@example.com');

// send request email change email
await pb.collection('users').requestEmailChange('new@example.com');
*/

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
