import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv"
import connectDB from "./database/db.js";

dotenv.config()
const app = express();
const port = process.env.PORT||5000
connectDB();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
