import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../types";
import { RootState } from "../store";

export interface ScannedProductBasket {
	medicine: Product[];
}

const initialState: ScannedProductBasket = {
	medicine: [],
};

export const scannedProductSlice = createSlice({
	name: "scannedProduct",
	initialState,
	reducers: {
		addScannedProduct: (
			state: ScannedProductBasket,
			action: PayloadAction<Product>
		) => {
			state.medicine.push(action.payload);
		},

		removeScannedProduct: (
			state: ScannedProductBasket,
			action: PayloadAction<{ _id: string }>
		) => {
			const index = state.medicine.findIndex(
				(basketitems) => basketitems._id === action.payload._id
			);
			let newBasket = [...state.medicine];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.log("Can't remove product");
			}
			state.medicine = newBasket;
		},
	},
});

export const { addScannedProduct, removeScannedProduct } =
	scannedProductSlice.actions;

export default scannedProductSlice.reducer;
