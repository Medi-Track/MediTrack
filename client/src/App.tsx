import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScannedMedicine from "./pages/ScannedMedicine";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route
							path="/scanned-medicine"
							element={<ScannedMedicine />}
						/>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
