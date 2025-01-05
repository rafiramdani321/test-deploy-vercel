import express from "express";

export const subcategoryRouter = express.Router();

subcategoryRouter.get("/", () => {
  return "Sub Category Page";
});