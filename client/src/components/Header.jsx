import React from "react";
import Navbar from "./Navbar";

function Header() {
	return (
		<div id="main">
			{/* <Navbar/> */}
			<div className="name">
				<h1>
					<span>Never Worry About</span> Your Inventory
				</h1>
				<p className="details">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
					debitis voluptatem fugiat aut exercitationem nostrum blanditiis
					temporibus fuga? At a culpa eligendi vero!
				</p>
				<a href="#" className="cv-btn">
					Upload
				</a>
			</div>
		</div>
	);
}

export default Header;
