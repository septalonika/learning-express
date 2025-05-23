import express from "express";
import usersRouter from "./routers/users";

const app = express();

app.use("/users", usersRouter);

export default app;
