import { useState } from "react";

//types
import { Product } from "../types";
//components
import BarcodeModal from "./BarcodeModal";
import { BiBarcodeReader } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import {MdDeleteOutline} from "react-icons/md";
const Item = ({ item, handleDelete, handleEdit }: any) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<li key={item._id} className='p-2 border-t grid gap-12 grid-cols-[3fr_1fr_1fr_0.25fr_0.25fr_0.25fr] items-center'>
				<div className='text-left'>{item.title}</div>
				<div className='text-left'>{item.stock}</div>
				<div className='text-right'>₹ {item.price.toLocaleString()}</div>
				<button className='flex justify-end text-xl text-[color:var(--color-primary)] hover:bg-gray-100 hover:text- p-2 rounded-full' onClick={() => handleEdit(item._id)}><AiOutlineEdit /></button>
				<button className='flex justify-end p-r-8 text-xl text-red-400 hover:bg-gray-100 p-2 rounded-full' onClick={() => handleDelete(item)}><MdDeleteOutline /></button>
				<button className='text-xl flex justify-end hover:bg-gray-100 p-2 rounded-full' onClick={() => setShowModal(true)}><BiBarcodeReader /></button>
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
