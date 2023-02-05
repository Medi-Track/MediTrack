import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Barcode from "react-barcode";
import CodeScanner from "../components/CodeScanner";

// const socket = io("http://localhost:5000");

export const Home = () => {
	return (
		<div>
			<div className="flex justify-center items-center">
				<Barcode
					textMargin={2}
					height={80}
					width={1}
					value="63dcf41c7e0fcd85b132aa59"
					displayValue={true}
				/>
			</div>
			<CodeScanner />

			{/* <h1>Home</h1> */}
		</div>
	);
};
