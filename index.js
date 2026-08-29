import cors from "cors";
import express from "express";
import { connectDB } from "./utils/DB.js";

import dotenv from "dotenv";

dotenv.config();
connectDB()
const app =express();
app.use(cors());
app.use(express.json());

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});