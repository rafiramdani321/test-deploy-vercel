import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import categoryRouter from "./src/category/category.route.js";
import subcategoryRouter from "./src/subcategory/subcategory.route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api/category", categoryRouter);
app.use("/api/subcategory", subcategoryRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running`));

export default app;