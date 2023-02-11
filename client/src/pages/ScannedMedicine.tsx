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
					<Item key={medicine._id} item={medicine} />
				))}
		</div>
	);
};

export default ScannedMedicine;
