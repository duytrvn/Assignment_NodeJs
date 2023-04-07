import express from "express";
import productRouter from "./routes/product.js";
import authRouter from "./routes/auth.js";
import categoryRouter from "./routes/category.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);


mongoose.connect("mongodb://127.0.0.1:27017/we17304");

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// Tạo file vite.config.js ở root -> clone github của thầy
// truy cập file app.js thêm cuối file -> export const viteNodeApp = app;
// Truy cập file package.json, sửa lại script -> npm run dev