import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`REST API client running on http://localhost:${port}/api`);
});
