import React, { useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
	increaseQuantity,
	decreaseQuantity,
} from "../../redux/slice/scannedProductSlice";
//types
import { Product } from "../../types";

const Item = ({ item, singleItem }: any) => {
	const dispatch = useDispatch();
	return (
		<li
			key={item._id}
			className="p-2 border-t grid gap-8 grid-cols-[3fr_1fr_1fr_0.5fr_1fr_1fr] items-center"
		>
			<div className="text-left">{item.title}</div>
			<div className="text-left flex items-center">
				<span
					onClick={() => {
						item.stock > 0 && dispatch(decreaseQuantity(item));
						console.log("stock", item.stock);
						console.log("id", item._id);
					}}
					className=" p-2 rounded-sm border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
				>
					-
				</span>
				<span> {item.stock}</span>
				<span
					onClick={() => dispatch(increaseQuantity(item))}
					className="p-2 rounded-sm border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
				>
					+
				</span>
			</div>
			<div className="text-right">₹{item.price}</div>
			<button className="rounded m-l-6 p-1 bg-cyan-400 hover:bg-zinc-900 hover:text-cyan-400">
				₹{item.stock * item.price}
			</button>
		</li>

		// 		<div key={item?._id} className="mt-2 flex justify-between items-center">
		// 			<div
		// 				className="items-center flex
		//  space-x-1 "
		// 			>
		// 				<span className="p-6 rounded-full bg-gray-400 "></span>
		// 				<div
		// 					className="flex flex-col space-y-1
		// "
		// 				>
		// 					<span>{item?.title}</span>
		// 					<span>{item?.brand}</span>
		// 				</div>
		// 			</div>
		// 			<div
		// 				className=" flex
		//  flex-col space-y-1"
		// 			>
		// 				<span>{item?.price}</span>
		// 				<div className="flex items-center space-x-4">
		// 					<span
		// 						onClick={() => {
		// 							item.stock > 0 && dispatch(decreaseQuantity(item));
		// 							console.log("stock", item.stock);
		// 							console.log("id", item._id);
		// 						}}
		// 						className=" cursor-pointer px-2 text-2xl py-1 border-[2px] border-gray-200"
		// 					>
		// 						-
		// 					</span>
		// 					<span>{item.stock}</span>
		// 					<span
		// 						onClick={() => dispatch(increaseQuantity(item))}
		// 						className="px-2 cursor-pointer text-2xl py-1  border-[2px] border-gray-200"
		// 					>
		// 						+
		// 					</span>
		// 				</div>
		// 			</div>
		// 		</div>
	);
};

export default Item;
