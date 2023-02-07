import React, { useEffect, useState } from "react";
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/slice/productSlice";
import type { RootState } from "../redux/store";

//components
import Item from "../components/Item";
import { Product } from "../types";

const Products = () => {
	const products = useSelector((state: RootState) => state.product.items);

	const dispatch = useDispatch();
	const getProducts = async () => {
		try {
			const { data } = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/product`);
			dispatch(addProduct(data));
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getProducts();
	}, []);

	console.log(products);

	return (
		<>
			<div className="">
				{products?.map((product: Product) => (
					<Item key={product._id} item={product} />
				))}
			</div>
		</>
	);
};

export default Products;
