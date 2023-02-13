import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Header from "../components/Header";
// import aboutimage from "../images/about.png";
// import aboutimage1 from "../images/download.png";

const Home = () => {
	return (
		<div>
			<Header />
			<Feature />
			<About
				image="/about.png"
				title="Easy to Maintain Track"
				button="Know More"
			/>
			<About
				image="/download.png"
				title="Easily Fet Details"
				button="Know More"
			/>
			<Contact />
		</div>
	);
};

export default Home;
