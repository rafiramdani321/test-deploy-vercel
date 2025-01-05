import express from "express";

const subcategoryRouter = express.Router();

subcategoryRouter.get("/", (req, res) => {
  res.json({
    message: "data subcategory"
  });
});

export default subcategoryRouter;

