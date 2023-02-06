import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../types";
import { RootState } from "../store";

export interface ProductBasket {
	items: Product[];
}

const initialState: ProductBasket = {
	items: [],
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addProduct: (state: ProductBasket, action: PayloadAction<Product[]>) => {
			state.items = action.payload;
		},
		removeProduct: (
			state: ProductBasket,
			action: PayloadAction<{ _id: string }>
		) => {
			const index = state.items.findIndex(
				(basketitems) => basketitems._id === action.payload._id
			);
			let newBasket = [...state.items];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.log("Can't remove product");
			}
			state.items = newBasket;
		},
	},
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
