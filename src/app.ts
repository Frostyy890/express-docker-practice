import express from "express";
import { config } from "./config";
import { UserController, catchAsync } from "@v1/utils";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

const userController = new UserController();

app.get("/users", catchAsync(userController.findMany.bind(userController)));

app.listen(config.server.port, () =>
  console.log(
    `Server started on port ${config.server.port}\nhttp://localhost:${config.server.port}`
  )
);
