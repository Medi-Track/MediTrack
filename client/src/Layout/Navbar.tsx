import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
	const [dropMenu, setDropMenu] = useState(false);

	const dropMenuHandler = () => {
		setDropMenu(!dropMenu);
	};

	return (
		<React.Fragment>
			<nav className="fixed top-0 left-0 z-50 w-full p-4 bg-white border-2 shadow-md md:p-3 shadow-gray-300">
				<div className="w-11/12 md:w-[85%]  lg:w-4/5 mx-auto max-w-[1440px] flex justify-between items-center">
					<div className="logo">
						<h1 className="text-xl font-bold">
							<Link to="/">
								<span className="text-cyan-400">MediTrack</span>{" "}
							</Link>
						</h1>
					</div>

					{/* Vissble When Screen Is Greater than 768 pixels */}
					<div className="items-center hidden gap-6 md:flex lg:gap-12">
						<div className="">
							<ul className="flex gap-6 font-semibold lg:gap-8 text-md">
								<Link
									to="/scan"
									className="hover:text-[color:var(--color-primary)]"
								>
									Scan
								</Link>
								<Link
									to="/product"
									className="hover:text-[color:var(--color-primary)]"
								>
									Product
								</Link>
								<Link
									to="/scanned-medicine"
									className="hover:text-[color:var(--color-primary)]"
								>
									Scanned Medicine
								</Link>
								{/* <Link
									to="/aboutus"
									className="hover:text-[color:var(--color-primary)]"
								>
									About Us
								</Link>
								<Link
									to="/contactus"
									className="hover:text-[color:var(--color-primary)] hidden lg:block"
								>
									Contact Us
								</Link> */}
							</ul>
						</div>
						<div className="flex gap-4">
							<Link
								className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-white text-[color:var(--color-primary)] rounded-full font-semibold hover:bg-[color:var(--color-primary)] hover:text-white"
								to="/login"
							>
								Log In
							</Link>
							<Link
								className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
								to="/signup"
							>
								Sign Up
							</Link>
						</div>
					</div>
					{/* Burger Menu For Smaller Screen Sizes */}
					<div className="flex items-center justify-center md:hidden">
						<button className="" onClick={dropMenuHandler}>
							{!dropMenu && <FaBars className="text-2xl" />}
							{dropMenu && <ImCross className="text-2xl" />}
						</button>
					</div>
				</div>
			</nav>
			{dropMenu && (
				<div className="absolute left-0 z-10 flex flex-col items-center justify-center w-full gap-8 py-8 bg-white shadow-lg md:hidden top-12 shadow-gray-200">
					<div className="">
						<ul className="flex flex-col gap-4 text-lg font-semibold">
							<Link
								to="/scan"
								className="hover:text-[color:var(--color-primary)]"
								onClick={dropMenuHandler}
							>
								Scan
							</Link>
							<Link
								to="/product"
								className="hover:text-[color:var(--color-primary)]"
								onClick={dropMenuHandler}
							>
								Product
							</Link>
							<Link
								to="/scanned-medicine"
								className="hover:text-[color:var(--color-primary)]"
							>
								Scanned Medicine
							</Link>
							{/* <Link
								to="/aboutus"
								className="hover:text-[color:var(--color-primary)]"
								onClick={dropMenuHandler}
							>
								About Us
							</Link>
							<Link
								to="/contactus"
								className="hover:text-[color:var(--color-primary)]"
								onClick={dropMenuHandler}
							>
								Contact Us
							</Link> */}
						</ul>
					</div>
					<div className="flex flex-col gap-4 ">
						<Link
							to="/login"
							className="px-32 py-2 border-2 border-[color:var(--color-primary)] bg-white text-[color:var(--color-primary)] rounded-full font-semibold hover:bg-[color:var(--color-primary)] hover:text-white"
							onClick={dropMenuHandler}
						>
							Log In
						</Link>
						<Link
							to="/signup"
							className="px-32 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
							onClick={dropMenuHandler}
						>
							Sign Up
						</Link>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Navbar;