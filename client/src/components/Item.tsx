import { useState } from "react";

//types
import { Product } from "../types";
//components
import BarcodeModal from "./BarcodeModal";
import { BiBarcodeReader } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";

const Item = ({ item, handleDelete, handleEdit }: any) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<li key={item._id} className='p-2 border-t grid gap-8 grid-cols-[3fr_1fr_1fr_0.5fr_1fr_1fr] items-center'>
				<div className='text-left'>{item.title}</div>
				<div className='text-left'>{item.stock}</div>
				<div className='text-right'>₹{item.price}</div>
				<button className='rounded m-l-6 p-1 bg-cyan-400 hover:bg-zinc-900 hover:text-cyan-400' onClick={() => handleEdit(item._id)}>Edit</button>
				<button className='flex justify-end p-r-8 text-xl' onClick={() => handleDelete(item)}><IoMdTrash /></button>
				<button onClick={() => setShowModal(true)} className='text-xl'><BiBarcodeReader /></button>
			</li>
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
