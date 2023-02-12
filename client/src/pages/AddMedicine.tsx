import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input.component";

import { GiMedicines } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import { BsCalendar2Date, BsCardImage, BsKeyboard } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const schema = yup.object().shape({
	title: yup.string().required(),
	price: yup.number().required(),
	brand: yup.string().required(),
	stock: yup.number().required(),
	expiring_date: yup.date().required(),
	dec: yup.string().required(),
	img: yup.mixed(),
});

const AddMedicine = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const submitForm = async (data: object) => {
		// console.log(data);
		const addData = async () => {
			try {
				const response = await axios.post(
					`${process.env.REACT_APP_PORT_SERVER}/api/product/create`,
					{ ...data, img: "" }
				);
				console.log(response);
				toast.success("Product added successfully");
			} catch (err) {
				toast.error("Something went wrong");
				console.log(err);
			}
		};
		addData();
		navigate("/product");
	};

	return (
		<div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
			<form
				action=""
				className="w-4/5 mx-auto"
				onSubmit={handleSubmit(submitForm)}
			>
				<div className="flex flex-col items-center justify-center header">
					<h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
						{"Add Medicine"}
					</h1>
					<div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
				</div>

				<div className="flex flex-col gap-4 mt-8">
					<Input
						Icon={GiMedicines}
						register={register}
						type="text"
						name="title"
						placeholder="title..."
						errorMessage={errors.email?.message as string}
					/>

					<Input
						Icon={BiRupee}
						register={register}
						type="number"
						name="price"
						placeholder="price..."
						errorMessage={errors.email?.message as string}
					/>

					<Input
						Icon={BsKeyboard}
						register={register}
						type="text"
						name="brand"
						placeholder="brand..."
						errorMessage={errors.password?.message as string}
					/>

					<Input
						Icon={AiOutlineStock}
						register={register}
						type="number"
						name="stock"
						placeholder="stock..."
						errorMessage={errors.password?.message as string}
					/>

					<Input
						Icon={BsCalendar2Date}
						register={register}
						type="date"
						name="expiring_date"
						placeholder="expiry..."
						errorMessage={errors.password?.message as string}
					/>

					<Input
						Icon={TbListDetails}
						register={register}
						type="text"
						name="dec"
						placeholder="description..."
						errorMessage={errors.password?.message as string}
						rows={6}
					/>

					<Input
						Icon={BsCardImage}
						register={register}
						type="file"
						name="img"
						placeholder="description..."
						errorMessage={errors.password?.message as string}
					/>
				</div>

				<div className="flex justify-around mt-8 footer">
					<button
						type="submit"
						className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddMedicine;
