import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
import { Switch } from "@headlessui/react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { addProduct } from "../redux/slice/productSlice";
import BarcodeScanner from "./molecules/BarcodeScanner";

import { CiCamera } from "react-icons/ci";
import ProductsModal from "./ProductsModal";

// types
import { Product } from "../types";

function CodeScanner() {
	const products = useSelector((state: RootState) => state.product.items);

	const [data, setData] = useState<Product>();
	const [input, setInput] = useState<string>("");

	const [torchOn, setTorchOn] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const [showProductModal, setShowProductModal] = useState<boolean>(false);

	useEffect(() => {
		if (!products) {
			console.log("products", products);
		}
	}, []);

	const handleSubmit = (input: string) => {
		if (!input) return;
		setShow(false);
		const item: Product | undefined = products.find(
			(product) => product?.uniq_id === input
		);
		if (item) {
			alert("data found");
			setData(item);
			setShowProductModal(true);
		} else {
			alert("No Item Found");
		}
	};

	// useEffect(() => {
	// 	if (input) {
	// 		handleSubmit();
	// 	}
	// }, [input]);

	return (
		<>
			<div className=" flex flex-col">
				<div className=" mx-auto  flex flex-col justify-center  bg-opacity-50   w-full max-w-[500px]  items-center">
					<div className=" mb-4 flex flex-col items-center justify-center ">
						<div className="">
							<span
								className=" cursor-pointer text-cyan-400 hover:to-cyan-700 "
								onClick={() => setShow(!show)}
							>
								<CiCamera className=" text-6xl " />
							</span>
						</div>

						<div className="flex space-x-4">
							<span>OFF</span>
							<Switch
								checked={show}
								onChange={setShow}
								className={`${show ? "bg-cyan-700" : "bg-cyan-400"}
          relative inline-flex h-[24px] w-[50px] shrink-0  cursor-pointer rounded-full
		   border-2 border-transparent transition-colors duration-200 ease-in-out
		    focus:outline-none focus-visible:ring-2
			  focus-visible:ring-white focus-visible:ring-opacity-75`}
							>
								{/* <span className="sr-only">Use setting</span> */}
								<span
									aria-hidden="true"
									className={`${
										show ? "translate-x-[26px]" : "translate-x-0"
									}
            pointer-events-none inline-block h-[20px] w-[20px] transform 
			rounded-full bg-white shadow-lg ring-0 transition
			 duration-200 ease-in-out`}
								/>
							</Switch>
							<span>ON</span>
						</div>
					</div>

					{show && (
						<BarcodeScannerComponent
							delay={1000}
							torch={torchOn}
							onUpdate={(err: any, result: any) => {
								if (result) {
									handleSubmit(result.text);
								}
								if (err) {
									// console.log(err);
								}
							}}
						/>
					)}
				</div>

				{/* {show && <BarcodeScanner onResult={onDetect} />} */}

				<div
					className="mt-8 w-full 
				"
				>
					{show && (
						<button
							className="  px-3 text-lg text-white bg-cyan-700 "
							onClick={() => setTorchOn(!torchOn)}
						>
							Switch Torch {torchOn ? "Off" : "On"}
						</button>
					)}
				</div>
			</div>

			<ProductsModal
				isOpen={showProductModal}
				setIsOpen={setShowProductModal}
				data={data}
				isCameraOpen={show}
				setIsCameraOpen={setShow}
			/>
		</>
	);
}

export default CodeScanner;
