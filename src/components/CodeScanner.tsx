import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function CodeScanner() {
	const [data, setData] = useState<string[]>([]);
	const [torchOn, setTorchOn] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		console.log(data);
	}, [data]);

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
								const newData = [...data, result.text];
								setData(newData);
								console.log(data);
							} else {
								console.log("No found");
							}
						}}
					/>
				)}

				{data?.length > 0 &&
					data?.map((item) => (
						<p className="text-gray-500 " key={item}>
							{item}
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
