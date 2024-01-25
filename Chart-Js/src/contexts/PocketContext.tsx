import {
  useEffect, // Takes two arguments, (code to run, optional array []) code runs after every render
  useState, // Returns array with two elements (current state, <-- updated state)
  createContext, // allows creation of a context object (global state)
  useMemo, // memoizes the result of a function
  useCallback, // memoizes callback functions, prevents unnecessary rerenders
  useContext, // takes a context object and returns current context value
} from "react";
import PocketBase, { RecordAuthResponse, RecordModel } from "pocketbase";

type PocketContextType = {
  // types for data each prop is recieving
  login: (
    email: string,
    password: string
  ) => Promise<RecordAuthResponse<RecordModel>>;
  register: (email: string, password: string) => Promise<RecordModel>;
  logout: () => void;

  user: { [key: string]: unknown } | null;
  pb: PocketBase;
};

const BASE_URL = "http://127.0.0.1:8090"; // database url

const PocketContext = createContext<PocketContextType | null>(null); // "react function: createContext" creates context object "PocketContext"

// Destructures the children prop from the components props, react component that takes children as a prop
export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []); // creates an instance of PocketBase using react hook "useMemo"

  const [user, setUser] = useState(pb.authStore.model);

  //respond to changes in authentication store and update user state
  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setUser(model);
    });
    ``;
  }, []);
  // Defines memoized functions for registration, login, and logout
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
  //provides context values to children
  return (
    <PocketContext.Provider value={{ register, login, logout, user, pb }}>
      {children}
    </PocketContext.Provider>
  );
};
export const usePocket = () => useContext(PocketContext);
