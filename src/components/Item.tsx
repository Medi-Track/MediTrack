import { useState } from "react";

//types
import { Product } from "../types";
//components
import BarcodeModal from "./BarcodeModal";

const Item = ({ item }: any) => {
	const [showModal, setShowModal] = useState(false);

	const showBarcode = (uniq_id: string) => {
		setShowModal(true);
	};

	return (
		<>
			<div
				key={item._id}
				className="flex  my-3 max-w-sm mx-auto justify-between items-center"
			>
				<span className="text-black">{item?.title}</span>
				<span
					onClick={() => {
						showBarcode(item?.uniq_id);
					}}
					className="cursor-pointer p-2 text-white active:bg-red-700 bg-red-500"
				>
					{item?.uniq_id}
				</span>
			</div>
			<BarcodeModal
				uniq_id={item?.uniq_id}
				title={item?.title}
				isOpen={showModal}
				setIsOpen={setShowModal}
			/>
		</>
	);
};

export default Item;
