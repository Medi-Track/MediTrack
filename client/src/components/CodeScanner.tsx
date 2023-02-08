import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addProduct } from "../redux/slice/productSlice";
import { Product } from "../types";
import BarcodeScanner from "./molecules/BarcodeScanner";

function CodeScanner() {
	const products = useSelector((state: RootState) => state.product.items);

	const [data, setData] = useState<Product[]>([]);

	const [torchOn, setTorchOn] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!products) {
			console.log("products", products);
		}
		console.log("data in use effect", data);
	}, [data]);

	const [input, setInput] = useState<string>("");
	const handleSubmit = () => {
		console.log(input);
		const item: Product[] = products.filter(
			(product) => product?.uniq_id === input
		);
		if (item) {
			alert("data found");
			setData([...data, ...item]);
		} else {
			alert("No Item Found");
		}
	};

	useEffect(() => {
		if (input) {
			handleSubmit();
		}
	}, [input]);

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
								setInput(result.text);
							}
							if (err) {
								// console.log(err);
							}
						}}
					/>
				)}
				{/* {show && <BarcodeScanner onResult={onDetect} />} */}

				{data?.length > 0 &&
					data?.map((item) => (
						<p className="text-white bg-red-400 " key={item._id}>
							{item.title}
						</p>
					))}

				<button
					className="  bg-red-400 "
					onClick={() => setTorchOn(!torchOn)}
				>
					Switch Torch {torchOn ? "Off" : "On"}
				</button>
				<button className="bg-blue-400" onClick={() => setShow(!show)}>
					Switch Carema {show ? "Off" : "On"}
				</button>
				<div>
					<form>
						<input
							className="p-2 border-2 border-gray-300 rounded-lg"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button className="p-2 bg-red-400">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default CodeScanner;
