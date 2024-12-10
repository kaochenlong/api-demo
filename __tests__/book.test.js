import request from "supertest"
import app from "../app.js"
import { getBook } from "../models/book.js"

describe("Ping", () => {
  it("will return pong", async () => {
    const response = await request(app).get("/ping")

    expect(response.body).toEqual({ message: "pong" })
    expect(response.status).toBe(200)
  })
})

describe("Book", () => {
  describe("get book", () => {
    it("can get book list", async () => {
      const response = await request(app).get("/v1/books")

      expect(response.body).toHaveProperty("records")
      expect(response.body).toHaveProperty("count")
      expect(response.status).toBe(200)
    })

    it("can get a single book", async () => {
      // Act
      const response = await request(app).get("/v1/books/1")

      // Assert
      expect(response.body).toHaveProperty("id", 1)
      expect(response.body).toHaveProperty("title")
      expect(response.status).toBe(200)
    })

    it("can not get a single book", async () => {
      const response = await request(app).get("/v1/books/aaa")

      expect(response.status).toBe(404)
      expect(response.body).toEqual({ message: "not found" })
    })
  })

  describe("create book", () => {
    it("can create a new book", async () => {
      const book = { title: "cccc", price: 100 }

      const response = await request(app).post("/v1/books").send(book)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("id")
      expect(response.body).toHaveProperty("title", book.title)
      expect(response.body).toHaveProperty("price", book.price)
    })

    it("can not create a new book", async () => {
      const book = { title: "cccc" }
      const response = await request(app).post("/v1/books").send(book)

      expect(response.status).toBe(400)
      expect(response.body).toEqual({ message: "format error" })
    })
  })

  describe("Update", () => {
    it("can update a book", async () => {
      // Arrange
      const book = await getBook(1)

      // Act
      const data = { title: "NewBook", price: 200 }
      const response = await request(app).put(`/v1/books/${book.id}`).send(data)

      // Assert
      expect(response.body).toEqual({ id: book.id, title: data.title, price: data.price })
      expect(response.status).toBe(200)
    })

    it("can not find book to update", async () => {
      const data = { title: "NewBook", price: 200 }
      const response = await request(app).put(`/v1/books/aaa`).send(data)

      expect(response.status).toBe(404)
      expect(response.body).toEqual({ message: "not found" })
    })

    it("can not update", async () => {
      // Arrange
      const book = await getBook(1)

      // Act
      const data = { title: "NewBook" }
      const response = await request(app).put(`/v1/books/${book.id}`).send(data)

      // Assert
      expect(response.body).toEqual({ message: "format error" })
      expect(response.status).toBe(400)
    })
  })

  describe("Delete", () => {
    it("can delete a book", async () => {
      const book = await getBook(1)
      const response = await request(app).delete(`/v1/books/${book.id}`)

      expect(response.body).toEqual({ message: `book ${book.title} deleted` })
      expect(response.status).toBe(200)
    })

    it("can not delete a book", async () => {
      const response = await request(app).delete(`/v1/books/-1`)

      expect(response.body).toEqual({ message: "not found" })
      expect(response.status).toBe(404)
    })
  })
})
