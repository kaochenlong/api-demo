import request from "supertest"
import app from "../app.js"

describe("Ping", () => {
  it("will return pong", async () => {
    const response = await request(app).get("/ping")

    expect(response.body).toEqual({ message: "pong" })
    expect(response.status).toBe(200)
  })
})

describe("Book", () => {
  it("can get book list", async () => {
    const response = await request(app).get("/v1/books")

    expect(response.body).toHaveProperty("records")
    expect(response.body).toHaveProperty("count")
    expect(response.status).toBe(200)
  })

  it("can create a new book", () => {
    //
  })
})
