import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { categoryRouter } from "./src/category/category.route.js";
import { subcategoryRouter } from "./src/subcategory/subcategory.route.js";

const app = express();
dotenv.config();

app.use(express.static("public"));
app.use(cookieParser());

app.use("/", (req, res) => {
  res.send("Home Page");
});
app.use("/api/categories", categoryRouter);
app.use("/api/subcategory", subcategoryRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;