import express from "express";
const userRouter = express.Router();
import { User } from "./models/users.js";

userRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

userRouter.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).send(newUser);
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(201).send(deleteUser);
  } catch (error) {
    console.log("operation delete is not working because of: " + error);
    res.status(404).send();
  }
});

export default userRouter;
