import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import scannedProductSlice from "./slice/scannedProductSlice";

export const store = configureStore({
	reducer: {
		product: productSlice,
		scannedProduct: scannedProductSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
