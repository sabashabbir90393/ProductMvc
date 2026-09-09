import dns from "dns";
import cors from "cors";
import express from "express";
import { connectDB } from "./utils/DB.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

connectDB();

app.use(
  cors({
   origin: [
  "http://localhost:5173",
  "https://relaxed-baklava-b05b6e.netlify.app/",
 /*  "https://fastidious-tiramisu-998d4f.netlify.app", */
],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/products", productRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});