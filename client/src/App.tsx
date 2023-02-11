import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScannedMedicine from "./pages/ScannedMedicine";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Products />} />
					<Route path="/scanned-medicine" element={<ScannedMedicine />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
