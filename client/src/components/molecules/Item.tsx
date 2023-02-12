import React, { useState, useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
	increaseQuantity,
	decreaseQuantity,
} from "../../redux/slice/scannedProductSlice";
//types
import { Product } from "../../types";

const Item = ({ item, alreadyScanned, stock, setStock }: any) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (alreadyScanned) {
			setStock(item?.stock);
		}
	}, [alreadyScanned]);

	return (
		<li
			key={item?._id}
			className="p-2 w-full border-t grid gap-8 grid-cols-[3fr_3fr_1fr_0.5fr_1fr_1fr] items-center"
		>
			<div className="text-left">{item?.title}</div>
			<div className="text-left flex items-center">
				<span
					onClick={() => {
						item?.stock > 0 &&
							dispatch(decreaseQuantity(item)) &&
							alreadyScanned &&
							setStock(stock - 1);
					}}
					className=" p-2 rounded-sm h-fit border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
				>
					-
				</span>
				<span> {alreadyScanned ? stock : item?.stock}</span>
				<span
					onClick={() =>
						dispatch(increaseQuantity(item)) &&
						alreadyScanned &&
						setStock(stock + 1)
					}
					className="p-2 rounded-sm h-fit border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
				>
					+
				</span>
			</div>
			<div className="text-right">₹{item?.price}</div>
			<button className="rounded m-l-6 p-1 cursor-default bg-cyan-400 hover:text-cyan-400">
				₹{(alreadyScanned ? stock : item?.stock) * item?.price}
			</button>
		</li>
	);
};

export default Item;
