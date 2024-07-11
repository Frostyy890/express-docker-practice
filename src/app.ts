import express from "express";
import { config } from "./config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(config.server.port, () =>
  console.log(
    `Server started on port ${config.server.port}\nhttp://localhost:${config.server.port}`
  )
);
