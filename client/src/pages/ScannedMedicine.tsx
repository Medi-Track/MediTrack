import React from "react";
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
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Add these medicines
					</button>
				</span>
				<span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Remove these medicines
					</button>
				</span>
			</div>
		</div>
	);
};

export default ScannedMedicine;
