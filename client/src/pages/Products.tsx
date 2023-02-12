import axios from "axios";
import React from "react";
// import { FaTrashAlt } from 'react-icons/fa'
import { IoMdTrash } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { addProduct, removeProduct } from "../redux/slice/productSlice";
import { Product } from "../types";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { BiBarcodeReader } from "react-icons/bi";

import Item from "../components/Item";
import { toast } from "react-hot-toast";

const Products = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const products = useSelector((state: RootState) => state.product.items);

	const getProducts = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:${process.env.REACT_APP_PORT}/api/product`
			);
			dispatch(addProduct(data));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleEdit = (id: Product["_id"]) => {
		navigate(`/medicine/stocks/edit/${id}`);
	};

	const handleDelete = async (product: Product) => {
		try {
			const data = await axios.delete(
				`http://localhost:${process.env.REACT_APP_PORT}/api/product/${product._id}`
			);
			// console.log(data);
			toast.success("Product deleted successfully");
			dispatch(removeProduct(product));
		} catch (error) {
			toast.error("Something went wrong");
			console.log(error);
		}
	};

	return (
		<div>
			<ul className="border-b">
				<li className="p-2 grid gap-8 grid-cols-[3fr_1fr_1fr_0.5fr_1fr_1fr]">
					<div className="font-bold flex items-center">
						<p>Title</p>
					</div>
					<div className="font-bold flex items-center">
						<p>Stock</p>
					</div>

					<div className="p-r-2 font-bold text-right">
						<p className="text-right">Price</p>
					</div>
				</li>
				{products.map((product: Product) => {
					return (
						<Item
							item={product}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Products;
