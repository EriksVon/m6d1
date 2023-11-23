import express from "express";
const userRouter = express.Router();
import { User } from "./models/users.js";

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

userRouter.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).send(newUser);
});

/* tentativo con try e catch */
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

userRouter.put("/:id", async (req, res) => {
  const upUser = await User.findByIdAndUpdate(req.params.id.id, req.body, {
    new: true,
  });
  res.json(upUser);
});

export default userRouter;
