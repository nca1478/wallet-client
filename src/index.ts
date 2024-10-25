import "reflect-metadata";
import express from "express";
import { AppRoutes } from "./routes";

const app = express();
const port = 4000;

app.use(express.json());
app.use(AppRoutes.routes);

app.listen(port, () => {
  console.log(`REST API client running on http://localhost:${port}/api`);
});
