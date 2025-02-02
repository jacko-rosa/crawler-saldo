import express from "express";
import cors from "cors";
const app = express();
const port = 8081;

app.use(
  cors()
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

