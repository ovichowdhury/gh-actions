import dbConnect, { User } from "./db";
import express from "express";

const app = express();

app.use(express.json());

app.get("/_health", (_, res) => {
  return res.status(200).json({
    message: "Ok",
  });
});

app.post("/user", async (req, res) => {
  await dbConnect();
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    avatar: req.body.avatar,
  });
  await user.save();
  return res.status(201).json({
    message: "Request Successful",
    data: user,
  });
});

export default app;
