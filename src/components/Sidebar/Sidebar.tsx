// import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  show: boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>;
 
}


// const Sidebar= ({ show, setShow, test }:SidebarProps) => {
const Sidebar:React.FC<SidebarProps> = ({ show }) => {
  return (
    <aside
      className={`fixed top-4 rounded-xl bottom-4 left-4  bg-gray-900 shadow p-4 z-50
        transition-transform duration-300 ease-in-out
        ${show ? "translate-x-0 w-40" : "-translate-x-64 w-40"}`}
    >

   
      {/* دکمه Toggle */}
      {/* <button
        onClick={() => setShow((prev) => !prev)}
        aria-label="Toggle sidebar"
        className="absolute top-4 -right-6 w-6 h-16 bg-gray-950 text-gray-100 shadow rounded-r-xl flex items-center justify-center transition-transform duration-300"
      >
        {show ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button> */}

      {/* محتویات Sidebar */}
      <div className="border-b h-11 border-gray-700">
        <h2 className="text-gray-100 text-lg font-semibold">Logo</h2>
      </div>
      <div className=" flex flex-col gap-4 text-gray-100 p-4">
        <Link to="/" className="hover:text-blue-400 transition-colors">home</Link>
        <Link to="/product" className="hover:text-blue-400 transition-colors">products</Link>
        <Link to="/about" className="hover:text-blue-400 transition-colors">about us</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
