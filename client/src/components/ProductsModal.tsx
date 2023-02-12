import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// components
import Item from "./molecules/Item";
// redux
import { addScannedProduct } from "../redux/slice/scannedProductSlice";
import { useDispatch } from "react-redux";
// types
import { Product } from "../types";
import ScanedItem from "./molecules/scanpage/scanedItem";
interface Props {
	isOpen: boolean;
	isCameraOpen: boolean;
	setIsCameraOpen: (isCameraOpen: boolean) => void;
	setIsOpen: (isOpen: boolean) => void;
	data: Product | undefined;
}

const ProductsModal = ({
	isOpen,
	setIsOpen,
	data,
	isCameraOpen,
	setIsCameraOpen,
}: Props) => {
	const dispatch = useDispatch();

	const [stock, setStock] = useState<number>(1);

	function closeModal() {
		setIsOpen(false);
	}

	function openCamera() {
		setIsCameraOpen(true);
	}

	const handleDispatch = () => {
		if (!data) return;
		dispatch(addScannedProduct({ ...data, stock: 1 }));
		closeModal();
		openCamera();
	};

	return (
		<div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg w-full font-medium leading-6 text-gray-900"
									>
										<div className="flex w-full justify-between items-center">
											<span>Scanned Product</span>
											<Link to="/scanned-medicine">
												<button
													type="button"
													className="inline-flex mb-2 justify-center rounded-md border border-transparent hover:bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none "
													onClick={() => {
														if (!data) return;
														dispatch(
															addScannedProduct({
																...data,
																stock: stock,
															})
														);
														closeModal();
													}}
												>
													Done
												</button>
											</Link>
										</div>
									</Dialog.Title>
									{data && (
										<ScanedItem
											item={data}
											stock={stock}
											setStock={setStock}
										/>
									)}

									<div className="mt-4 flex justify-between items-center">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => {
												closeModal();
												openCamera();
											}}
										>
											Scan Again
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => {
												handleDispatch();
											}}
										>
											Scan Next Product
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};

export default ProductsModal;
