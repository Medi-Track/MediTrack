import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />

					{/* <Home /> */}
					{/* <Products /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
