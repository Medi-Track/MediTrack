import React from "react";
import axios from "axios";
//toast
import toast from "react-hot-toast";
//redux
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/molecules/Item";
import { RootState } from "../redux/store";

//types
import { Product } from "../types";

const ScannedMedicine = () => {
	const medicines: Product[] = useSelector(
		(state: RootState) => state.scannedProduct.medicine
	);
	const addMedicines = async (medicines: Product[]) => {
		//axios call to add medicines to the database
		try {
			const { data } = await axios.put(
				`${process.env.REACT_APP_PORT_SERVER}/api/product/inc-medicines`,
				medicines
			);
			// console.log("data", data);
			toast.success("Medicines added");
		} catch (err: any) {
			// condition with toast
			toast.error(err?.message);
			toast.error("Something went wrong");
			console.log(err);
		}
	};
	const removeMedicines = async (medicines: Product[]) => {
		//axios call to add medicines to the database
		try {
			const { data } = await axios.put(
				`${process.env.REACT_APP_PORT_SERVER}/api/product/dec-medicines`,
				medicines
			);
			// console.log("data", data);
			// toast.success(data.message);
			toast.success("Medicines removed");
		} catch (err: any) {
			// condition with toast
			toast.error(err?.message);
			toast.error("Something went wrong");
			console.log(err);
		}
	};

	return (
		<div>
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

						<div className="p-r-2 font-bold text-right">
							<p className="text-right">Total</p>
						</div>
					</li>
					{medicines.map((medicine: Product) => {
						return <Item key={medicine._id} item={medicine} />;
					})}
				</ul>
			</div>

			{/* {medicines?.length > 0 &&
				medicines?.map((medicine) => (
					<div
						key={medicine._id}
						className="flex max-w-md mx-auto flex-col justify-center items-center"
					>
						<Item item={medicine} />
					</div>
				))} */}

			{medicines.length > 0 ? (
				<div className="flex mx-auto mt-4 justify-between max-w-md  items-center">
					<span>
						<button
							onClick={() => {
								removeMedicines(medicines);
							}}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Remove these medicines
						</button>
					</span>
					<span>
						<button
							onClick={() => {
								addMedicines(medicines);
							}}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Add these medicines
						</button>
					</span>
				</div>
			) : (
				<div className="flex mt-4 flex-col justify-center items-center ">
					<span className="text-xl ">No Item Scanned</span>
					<span className="text-sm text-gray-300">Please Scan Item</span>
				</div>
			)}
		</div>
	);
};

export default ScannedMedicine;
