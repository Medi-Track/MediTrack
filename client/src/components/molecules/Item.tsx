import React, { useState } from "react";
import { Product } from "../../types";

const Item = ({ item }: any) => {
	const [stock, setStock] = useState(1);
	return (
		<div key={item?._id} className="mt-2 flex justify-between items-center">
			<div
				className="items-center flex
 space-x-1 "
			>
				<span className="p-6 rounded-full bg-gray-400 "></span>
				<div
					className="flex flex-col space-y-1
"
				>
					<span>{item?.title}</span>
					<span>{item?.brand}</span>
				</div>
			</div>
			<div
				className=" flex
 flex-col space-y-1"
			>
				<span>{item?.price}</span>
				<div className="flex items-center space-x-4">
					<span
						onClick={() => stock > 0 && setStock(stock - 1)}
						className=" cursor-pointer px-2 text-2xl py-1 border-[2px] border-gray-200"
					>
						-
					</span>
					<span>{stock}</span>
					<span
						onClick={() => setStock(stock + 1)}
						className="px-2 cursor-pointer text-2xl py-1  border-[2px] border-gray-200"
					>
						+
					</span>
				</div>
			</div>
		</div>
	);
};

export default Item;
