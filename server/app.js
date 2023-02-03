const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/product");

// routes
const ambulanceRoute = require("./routes/ambulance");

const app = express();
app.use(express.json());
dotenv.config();

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("DB connected"))
	.catch((err) => console.log("DB error", err));

io.on("connection", (socket) => {
	console.log("user connected");

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});

	socket.on("ambulance", (location) => {
		console.log("event emited1");
		io.emit("ambulance", location);
	});
});

app.get("/", async (req, res) => {
	res.send("app is running try to find /api/*");
});

app.use("/api/ambulance", ambulanceRoute);
app.use("/api/product", productRoute);

server.listen(process.env.PORT || 5000, () => {
	console.log(`server is on 5000 or  running ${process.env.PORT}`);
});

// setInterval(() => {
// 	ambulanceLocation = {
// 		location: "28.5464258,77.2838621",
// 		timestamp: new Date().toLocaleString(),
// 	};
// 	console.log("event emited2");
// 	io.emit("ambulance", ambulanceLocation);
// }, 5000);
