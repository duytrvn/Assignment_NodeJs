import express from "express";
import productRouter from "./routes/product.js";
import authRouter from "./routes/auth.js"
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17304");

export const viteNodeApp = app;