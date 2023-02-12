import React from "react";
import axios from "axios";
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
				"http://localhost:5000/api/product/inc-medicines",
				medicines
			);
			console.log("data", data);
		} catch (err) {
			console.log(err);
		}
	};
	const removeMedicines = async (medicines: Product[]) => {
		//axios call to add medicines to the database
		try {
			const { data } = await axios.put(
				`http://localhost:${process.env.REACT_APP_PORT}/api/product/dec-medicines`,
				medicines
			);
			console.log("data", data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			{medicines?.length > 0 &&
				medicines?.map((medicine) => (
					<div
						key={medicine._id}
						className="flex max-w-md mx-auto flex-col justify-center items-center"
					>
						<Item item={medicine} />
					</div>
				))}

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
		</div>
	);
};

export default ScannedMedicine;
