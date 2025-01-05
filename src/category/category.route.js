import express from "express";

const categoryRouter = express.Router();

categoryRouter.get("/", () => {
  return "Category Page";
});

export default categoryRouter;