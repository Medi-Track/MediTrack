import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Barcode from "react-barcode";
import { BiDownload } from 'react-icons/bi'
import exportAsImage from "../utils/exportAsImage";


interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	title: string;
	uniq_id: string;
}

const BarcodeModal = ({ isOpen, setIsOpen, title, uniq_id }: Props) => {
	function closeModal() {
		setIsOpen(false);
	}


	const barcodeRef = useRef(null);


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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
									{/* <Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										{title}
									</Dialog.Title> */}


									<div className="mt-2 flex justify-center" ref={barcodeRef}>
										<Barcode width={3} height={150} displayValue={false} value={uniq_id} />
									</div>

									<div className="mt-8 flex items-center justify-between">
										<button
											className="text-3xl"
											onClick={() => exportAsImage(barcodeRef.current, `${title}${Date.now()}.png`)}
										>
											<BiDownload />
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Close
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

export default BarcodeModal;
