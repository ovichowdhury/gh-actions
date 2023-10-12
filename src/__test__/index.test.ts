import request from "supertest";
import app from "../app";
import dbConnect from "../db";
import mongoose from "mongoose";

beforeAll(async () => {
  await dbConnect();
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("[TEST] App health check", async function () {
  const res = await request(app).get("/user").send().expect(200);
  console.log(res.body.user._id);
  expect(res.body.user._id).toBeDefined();
});
