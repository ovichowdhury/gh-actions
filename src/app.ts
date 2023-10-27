import dbConnect, { User } from "./db";
import express from "express";

const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {
  await dbConnect();
  const user = new User({
    name: "Bill",
    email: "bill@initech.com",
    avatar: "https://i.imgur.com/dM7Thhn.png",
  });
  await user.save();
  return res.status(200).json({
    message: "Hello World V2",
    user: user,
  });
});

export default app;
