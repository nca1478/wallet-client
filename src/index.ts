import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes";
import { envs } from "./config";

const app = express();
const port = envs.PORT;

app.set("port", port);
app.use(cors());
app.use(express.json());
app.use(AppRoutes.routes);

app.listen(port, () => {
  console.log(`REST API client running on port ${port}`);
});
