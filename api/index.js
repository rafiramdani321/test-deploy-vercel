import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3001, () => console.log(`Server running`));

export default app;