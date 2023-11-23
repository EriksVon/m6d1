import express from "express";
const apiRouter = express.Router();
import userRouter from "./usersRouter.js";

apiRouter.use("/users", userRouter);

apiRouter.get("/", (req, res) => {
  res.json({ message: "pippo pluto e paperino" });
});

export default apiRouter;
