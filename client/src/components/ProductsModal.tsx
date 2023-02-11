import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Barcode from "react-barcode";
import { Product } from "../types";

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
	const [stock, setStock] = useState(1);

	function closeModal() {
		setIsOpen(false);
	}

	function openCamera() {
		setIsCameraOpen(true);
	}

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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										This Product is Scanned
									</Dialog.Title>
									{data && (
										<div
											key={data._id}
											className="mt-2 flex justify-between items-center"
										>
											<div
												className="items-center flex
                                         space-x-1 "
											>
												<span className="p-6 rounded-full bg-gray-400 "></span>
												<div
													className="flex flex-col space-y-1
                                        "
												>
													<span>{data.title}</span>
													<span>{data.brand}</span>
												</div>
											</div>
											<div
												className=" flex
                                         flex-col space-y-1"
											>
												<span>{data.price}</span>
												<div className="flex items-center space-x-4">
													<span
														onClick={() =>
															stock > 0 && setStock(stock - 1)
														}
														className=" cursor-pointer px-2 text-2xl py-1 border-[2px] border-gray-200"
													>
														-
													</span>
													<span>{stock}</span>
													<span
														onClick={() => setStock(stock + 1)}
														className="px-2 cursor-pointer text-2xl py-1  border-[2px] border-gray-200"
													>
														+
													</span>
												</div>
											</div>
										</div>
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
												closeModal();
												openCamera();
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
