import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
import CodeScanner from "../components/CodeScanner";
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, addProduct } from "../redux/slice/productSlice";
import type { RootState } from "../redux/store";
// const socket = io("http://localhost:5000");
// import { compressor } from "../functions/functions";

const Home = () => {
	const products = useSelector((state: RootState) => state.product.items);

	const dispatch = useDispatch();
	const getProducts = async () => {
		try {
			const { data } = await axios.get("http://localhost:5000/api/product");
			dispatch(addProduct(data));
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div>
			<CodeScanner />
		</div>
	);
};

export default Home;
