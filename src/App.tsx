import { Bounce } from "react-toastify/unstyled";
import "./App.css";

import Layout from "./pages/Layout/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
<>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
      <Layout />
</>
    
  );
}

export default App;
