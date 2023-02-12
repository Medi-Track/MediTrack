import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
// import { FaTrashAlt } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { addProduct, removeProduct } from '../redux/slice/productSlice';
import { Product } from "../types";
import { FaSortUp, FaSortDown } from 'react-icons/fa'
import { BiBarcodeReader } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Item from '../components/Item';
import { demoData } from '../demoData';

const Products = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const products = useSelector((state: RootState) => state.product.items);

	const [searchTerm, setSearchTerm] = React.useState("");

	let list = products.filter((product: Product) => {
		if (searchTerm === "") {
			return product
		} else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
			return product
		}
	})


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

	// create demo data
	const createDemoData = async () => {
		const res = Promise.resolve(
			setInterval(() => {

				demoData.forEach((product) => {
					try {
						const data = axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/product/create`, product);
						console.log(data);
					} catch (error) {
						console.log(error);
					}
				},[1000])
			}))
	}

	// createDemoData();





	const handleEdit = (id: Product["_id"]) => {
		navigate(`/update-medicine/${id}`);
	}

	const handleDelete = async (product: Product) => {
		try {
			const data = await axios.delete(`http://localhost:${process.env.REACT_APP_PORT}/api/product/${product._id}`)
			console.log(data);
			dispatch(removeProduct(product));
		} catch (error) {
			console.log(error);
		}

	}

	const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	}




	return (
		<div>
			<div className="flex items-center pt-4 pb-12">
				<input
					type="text"
					placeholder="Search your medicines here..."
					className="min-w-[50%] border border-gray-300 rounded p-2 pr-12 focus:outline-none focus:border-[color:var(--color-primary)]"
					value={searchTerm}
					onChange={handleSearchTermChange}
				/>
				<button className='text-[var(--color-primary)] text-xl relative -left-8'><FiSearch /></button>
				{/* <button className="bg-[color:var(--color-primary)] text-white rounded-full p-2 ml-2">Search</button> */}
			</div>

			<ul className='border-b'>
				<li className='p-2 grid gap-12 grid-cols-[3fr_1fr_1fr_0.25fr_0.25fr_0.25fr]'>
					<div className='flex items-center font-bold'>
						<p>Title</p>
					</div>
					<div className='flex items-center font-bold'>
						<p>Stock</p>
					</div>

					<div className='font-bold text-right p-r-2'>
						<p className='text-right'>Price</p>
					</div>
				</li>
				{

					list.map((product: Product) => {
						return (
							<Item item={product} handleDelete={handleDelete} handleEdit={handleEdit} />
						)
					})
				}
			</ul>
		</div>
	)
}


export default Products;