import cors from "cors";
import express from "express";
import { connectDB } from "./utils/DB.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";

dotenv.config();

const app = express();

// Database Connection Start
connectDB();

// Dynamic CORS for local & production
const allowedOrigins = [
  "http://localhost:5173",
  "https://hilarious-lokum-909685.netlify.app/",
  process.env.CLIENT_URL // Dynamic production URL optional
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Routes
app.use("/products", productRouter);

// Health check root route
app.get("/", (_req, res) => {
  res.send("API Server is running successfully!");
});

// Railway dynamic PORT binding
const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});