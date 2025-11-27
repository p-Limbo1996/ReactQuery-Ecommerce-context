// src/routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { isLogin } = useContext(AuthContext)!;

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
