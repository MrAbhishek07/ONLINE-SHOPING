import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/products";
import Contact from "./components/contact";
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "./components/themes.js"
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Reset from "./components/auth/reset";




import NotFound from './NotFound';
import { ToastContainer } from "react-toastify";



const StyledApp = styled.div` 
`


function App() {


  const [theme, setTheme] = useState("light");



  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
    <GlobalStyles />
    <StyledApp />
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />


          <Route path="*" element={<NotFound />} />

        </Routes>
     
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
