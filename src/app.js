import express from "express";
import routerUser from "./router/user.js";
import dotenv from "dotenv";
// const port= 8000;
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", routerUser);


export const viteNodeApp = app;

// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });
