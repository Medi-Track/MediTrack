import React, { useEffect, useRef } from "react";
import Quagga from "quagga";

function BarcodeScanner({ onResult }) {
	const videoRef = useRef(null);
	useEffect(() => {
		Quagga.init(
			{
				inputStream: {
					type: "LiveStream",
					constraints: {
						width: 640,
						height: 320,
						facingMode: "environment",
					},
					frequency: 0,

					area: {
						// defines rectangle of the detection/localization area
						top: "10%", // top offset
						right: "10%", // right offset
						left: "10%", // left offset
						bottom: "10%", // bottom offset
						//give the color of the border
						color: "red",
					},
				},
				locator: {
					halfSample: true,
					patchSize: "medium", // x-small, small, medium, large, x-large
					debug: {
						showCanvas: true,
						showPatches: false,
						showFoundPatches: false,
						showSkeleton: false,
						showLabels: false,
						showPatchLabels: false,
						showRemainingPatchLabels: false,
						boxFromPatches: {
							showTransformed: true,
							showTransformedBox: true,
							showBB: true,
						},
					},
				},
				numOfWorkers: 1,
				decoder: {
					readers: ["code_128_reader"],
					debug: {
						drawBoundingBox: true,
						showFrequency: true,
						drawScanline: true,
						showPattern: true,
					},
				},
				locate: false,
			},
			function (err) {
				if (err) {
					console.log(err);
					return;
				}
				Quagga.start();
			}
		);
		Quagga.onDetected(_onDetected);
		return () => {
			console.log("BarcodeScanner unmounting");
			Quagga.stop();
			Quagga.offDetected(_onDetected);
		};
	}, []);

	const handleTurnOff = () => {
		videoRef.current.srcObject.getTracks().forEach((track) => {
			track.stop();
		});
	};

	const _onDetected = (result) => {
		console.log(result.codeResult.code);
		handleTurnOff();
		Quagga.stop();
		// onResult(result.codeResult.code);
		// off the camers
	};

	return <div ref={videoRef} id="interactive" className="viewport" />;
}

export default BarcodeScanner;
