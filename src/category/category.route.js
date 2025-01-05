import express from "express";

export const categoryRouter = express.Router();

categoryRouter.get("/", () => {
  return "Category Page";
});