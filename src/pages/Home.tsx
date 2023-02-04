import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Barcode from "react-barcode";
import { CodeScanner } from "../components/CodeScanner";

// const socket = io("http://localhost:5000");

export const Home = () => {
	return (
		<div>
			<div className="flex justify-center items-center">
				<Barcode value="123456789012" displayValue={false} />
			</div>
			<CodeScanner />

			<h1>Home</h1>
		</div>
	);
};
