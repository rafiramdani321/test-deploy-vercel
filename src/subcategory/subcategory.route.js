import express from "express";

const subcategoryRouter = express.Router();

subcategoryRouter.get("/", () => {
  return "Sub Category Page";
});

export default subcategoryRouter;