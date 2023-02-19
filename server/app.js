const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// routes
const productRoute = require("./routes/product");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("DB connected"))
	.catch((err) => console.log("DB error", err));

app.get("/", async (req, res) => {
	res.send("app is running try to find /api/*");
});

app.use("/api/product", productRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log(`server is running on port ${process.env.PORT || 5000}`);
});
