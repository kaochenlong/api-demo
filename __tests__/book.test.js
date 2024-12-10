import request from "supertest"
import app from "../app.js"

describe("Ping", () => {
  it("will return pong", async () => {
    const response = await request(app).get("/ping")

    expect(response.body).toEqual({ message: "pong" })
    expect(response.status).toBe(200)
  })
})
