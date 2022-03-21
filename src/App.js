import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Product from "./components/Product";
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
  return (
    <>

    <Navbar/>
       <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        
      </Routes>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
