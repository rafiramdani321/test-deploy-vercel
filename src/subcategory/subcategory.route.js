import express from "express";

const subcategoryRouter = express.Router();

subcategoryRouter.get("/", (req, res) => {
  res.json({
    messages: "Sub Category"
  })
});

export default subcategoryRouter;