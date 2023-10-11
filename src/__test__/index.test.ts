import request from "supertest";
import app from "../app";

test("[TEST] App health check", async function () {
  const res = await request(app).get("/user").send().expect(200);
  console.log(res.body.user._id);
  expect(res.body.user._id).toBeDefined();
});
