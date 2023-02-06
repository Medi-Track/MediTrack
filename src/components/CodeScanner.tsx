import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
	selectProductWithUniqId,
	addProduct,
} from "../redux/slice/productSlice";
import { Product } from "../types";

function CodeScanner() {
	const products = useSelector((state: RootState) => state.product.items);

	const [data, setData] = useState<Product[]>([]);

	const [torchOn, setTorchOn] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		console.log("data", data);
	}, [data]);

	console.log("products", products);

	return (
		<>
			<div className=" flex flex-col">
				{show && (
					<BarcodeScannerComponent
						width={500}
						height={500}
						delay={1000}
						torch={torchOn}
						onUpdate={(err: any, result: any) => {
							if (result) {
								alert(result.text);
								const item = products.find(
									(product) => product?.uniq_id === result.text
								);
								if (item) {
									console.log(item);
									const newData: Product[] = [...data, item];
									console.log("new data", newData);
									alert("data found");
									setData(newData);
									console.log(data);
								} else {
									alert("No Item Found");
								}
							}
						}}
					/>
				)}

				{data?.length > 0 &&
					data?.map((item) => (
						<p className="text-white bg-red-400 " key={item._id}>
							{item.title}
						</p>
					))}
				{!(data.length > 0) && "No data found"}

				<button
					className="  bg-red-400 "
					onClick={() => setTorchOn(!torchOn)}
				>
					Switch Torch {torchOn ? "Off" : "On"}
				</button>
				<button className="bg-blue-400" onClick={() => setShow(!show)}>
					Switch Carema {show ? "Off" : "On"}
				</button>
			</div>
		</>
	);
}

export default CodeScanner;
