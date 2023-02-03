import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const CodeScanner = () => {
	const [data, setData] = useState<string>("Not Found");
	const [stopStream, setStopStream] = React.useState(true);
	return (
		<>
			<BarcodeScannerComponent
				width={500}
				height={500}
				stopStream={stopStream}
				onUpdate={(err, result) => {
					if (result) {
						console.log(result);
						setStopStream(true);
					} else {
						console.log(err);
						setData("Not Found");
					}
				}}
			/>
			<p>{data}</p>
		</>
	);
};
