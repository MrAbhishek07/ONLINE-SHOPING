import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/products";
import Contact from "./components/contact";


import NotFound from './NotFound';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
