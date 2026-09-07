import cors from "cors";
import express from "express";
import { connectDB } from "./utils/DB.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";

dotenv.config();
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST" , "PUT", "DELETE"],
  
  })
);

app.use(express.json());
app.use("/products", productRouter);
app.listen(5050, () => {
  console.log("Server is running on port 5050");
});