import request from "supertest";
import app from "../app";
import dbConnect from "../db";
import mongoose from "mongoose";

beforeAll(async () => {
  await dbConnect();
}, 10000);

afterAll(async () => {
  await mongoose.connection.close();
});

test("[TEST] Create an User", async function () {
  const res = await request(app)
    .post("/user")
    .send({
      name: "Nahid",
      email: "nahid@test.com",
      avatar: "https://www.img.com/avatar",
    })
    .expect(201);
  expect(res.body.data._id).toBeDefined();
});
