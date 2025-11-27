import { createContext, useState } from "react";

export const AuthContext = createContext<TAuthContext | null>(null);
type TAuthProvider = {
  children: React.ReactNode;
};

type TAuthContext = {
  isLogin: false | true;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthProvider = ({ children }: TAuthProvider) => {
  const [isLogin, setIsLogin] = useState<boolean>(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
