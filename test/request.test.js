import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("GET /users", () => {
  it("should respond with user home page", async () => {
    const res = await request.get("/users").expect("Content-Type", /text/).expect(200);
    expect(res.text).toBe("User home page");
  });
});
