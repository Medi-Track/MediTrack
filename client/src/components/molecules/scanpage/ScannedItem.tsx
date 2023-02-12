import React from "react";
import { useDispatch } from "react-redux";

import { Product } from "../../../types";

interface Props {
	item: Product;
	stock: number;
	setStock: (stock: number) => void;
	fromModal: boolean;
}

const ScannedItem = ({ item, stock, setStock, fromModal }: Props) => {
	const dispatch = useDispatch();
	return (
		<>
			<li
				key={item._id}
				className="p-2 w-full border-t grid gap-8 grid-cols-[3fr_3fr_1fr_0.5fr_1fr_1fr] items-center"
			>
				<div className="text-left">{item.title}</div>
				<div className="text-left flex items-center">
					<span
						onClick={() => {
							stock > 0 && setStock(stock - 1);
						}}
						className=" p-2 rounded-sm h-fit border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
					>
						-
					</span>
					<span> {stock}</span>
					<span
						onClick={() => setStock(stock + 1)}
						className="p-2 rounded-sm h-fit border-cyan-200 hover:bg-cyan-200 cursor-pointer text-2xl"
					>
						+
					</span>
				</div>
				<div className="text-right">₹{item.price}</div>
				<button className="rounded m-l-6 p-1 cursor-default bg-cyan-400 hover:text-cyan-400">
					₹{fromModal ? stock * item?.price : item?.stock * item?.price}
				</button>
			</li>
		</>
	);
};

export default ScannedItem;
