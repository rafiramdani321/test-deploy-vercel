import express from "express";

const subcategoryRouter = express.Router();

subcategoryRouter.get("/", (req, res) => {
  res.send("Sub category Page");
});

export default subcategoryRouter;