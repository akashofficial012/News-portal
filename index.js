const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDb");
const router = require("./routes/authRoute");

dotenv.config();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

