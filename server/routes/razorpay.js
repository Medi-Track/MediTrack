const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

router.get("/get-razorpay-key", (req, res) => {
	console.log("get-razorpay-key");
	res.send({ key: process.env.RAZORPAY_KEY_ID });
});

router.post("/create-order", async (req, res) => {
	const { amount } = req.body;
	console.log("CREATE ORDER ");
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID,
			key_secret: process.env.RAZORPAY_SECRET,
		});
		const options = {
			amount: amount * 100,
			currency: "INR",
		};
		console.log("INSIDE CREATE ORDER 22 ");
		const order = await instance.orders.create(options);
		if (!order) {
			return res.status(500).send("Some error occured");
		}
		console.log("INSIDE CREATE ORDER 27 ");
		res.status(201).send(order);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

router.post("/pay-order", async (req, res) => {
	console.log(" INSIDE pay-orde  ");
	const {
		orderCreationId,
		razorpayPaymentId,
		razorpayOrderId,
		razorpaySignature,
	} = req.body;
	console.log(" INSIDE pay-orde  =>", orderCreationId);
	try {
		// Creating our own digest
		// The format should be like this:
		// digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
		const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

		shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

		const digest = shasum.digest("hex");

		// comaparing our digest with the actual signature
		if (digest !== razorpaySignature)
			return res.status(400).json({ msg: "Transaction not legit!" });

		// THE PAYMENT IS LEGIT & VERIFIED
		// YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
		res.status(201).send({ msg: "Payment Successful" });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

module.exports = router;
