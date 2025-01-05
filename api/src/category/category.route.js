import express from "express";

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  res.json({
    message: "data category"
  });
});

export default categoryRouter;

