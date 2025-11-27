import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Login from "../Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductsDetailsPage from "../ProductsDetails/ProductsDetailsPage";
import ProductsPage from "../Products/ProductsPage";

function Layout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const { isLogin } = useContext(AuthContext)!;
  // const [isLogin, setIsLogin] = useState<boolean>(localStorage.getItem("isLogin") === "true");

return (
  <div className="bg-gray-800 w-full h-screen relative overflow-hidden">
    {isLogin ? (
      <>
        <Navbar />
        <Sidebar show={showSidebar} setShow={setShowSidebar} />
        <main
          className={`absolute top-20 bottom-0 right-0 p-4 m-4 rounded-xl transition-all duration-500 bg-gray-900 ${
            showSidebar ? "left-44" : "left-0"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductsDetailsPage />} />
          </Routes>
        </main>
      </>
    ) : (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )}
  </div>
);

}

export default Layout;
