import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Barcode from "react-barcode";
import CodeScanner from "../components/CodeScanner";

// const socket = io("http://localhost:5000");
// import { compressor } from "../functions/functions";

export const Home = () => {
	// useEffect(() => {
	// 	compressor();
	// }, []);
	return (
		<div>
			<div className="flex justify-center items-center">
				<Barcode
					textMargin={2}
					value="63dcf41c7e0fcd85b132aa59"
					displayValue={true}
				/>
			</div>
			<CodeScanner />

			{/* <h1>Home</h1> */}
		</div>
	);
};
