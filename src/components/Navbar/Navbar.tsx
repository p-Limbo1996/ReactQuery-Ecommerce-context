import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

// type NavbarProps = Tlogin & {
//   children?: React.ReactNode;
//   userAvatar?: string;
// };

// type formDataType = {
//   name: string;
//   lastName: string;
//   age: number;
//   gender: "male" | "female" | "other";
// };

const Navbar = () => {


  const { setIsLogin } = useContext(AuthContext)!;

  const handleLogOut = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  const settingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        settingRef.current &&
        !settingRef.current?.contains(e.target as Node)
      ) {
        setShowSetting(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showSetting, setShowSetting] = useState<boolean>(false);
  const userAvatar=""

  return (
    <nav className="fixed top-4 left-48  right-4 rounded-xl h-16 bg-gray-900 backdrop-blur-md shadow-md flex items-center justify-end px-4 md:px-4 z-10">
      {/* آواتار کاربر */}
    
      <div
        onClick={() => setShowSetting(!showSetting)}
        className=" cursor-pointer relative w-11 h-11 rounded-full bg-blue-600 border border-white/20 shadow-md overflow-hidden"
      >
        {userAvatar && (
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {showSetting && (
        <div
          ref={settingRef}
          className=" p-2 flex items-center justify-center shadow rounded-xl absolute w-32 top-14 right-0  bg-gray-600/80 backdrop-blur-md "
        >
          <button
            onClick={handleLogOut}
            className="border text-blue-700 hover:text-blue-300  font-bold border-blue-800 bg-gray-900 hover:bg-blue-800 rounded-lg w-full h-10"
          >
            logOut
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
