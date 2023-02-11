import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="flex  justify-between items-center">
					<div className="space-x-4">
						<Link to="/" className="">
							Home
						</Link>
						<Link to="/product" className="">
							Products
						</Link>
						<Link to="/scanned-medicine" className="">
							ScannedMedicine
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
