import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/slice/productSlice";
import type { RootState } from "../redux/store";
// components
import CodeScanner from "../components/CodeScanner";
import ScannedItem from "../components/molecules/scanpage/ScannedItem";
import ScannedMedicine from "./ScannedMedicine";
import { toast } from "react-hot-toast";
// const socket = io("http://localhost:5000");

const Home = () => {
	const products = useSelector((state: RootState) => state.product.items);

	const dispatch = useDispatch();
	const getProducts = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:${process.env.REACT_APP_PORT}/api/product`
			);
			dispatch(addProduct(data));
		} catch (err) {
			toast.error("Something went wrong");
			console.log(err);
		}
	};
	useEffect(() => {
		if (products.length == 0) {
			getProducts();
		}
	}, []);

	return (
		<div>
			<CodeScanner />
			<ScannedMedicine />
		</div>
	);
};

export default Home;
