import Express from "express"
import * as BookController from "../controllers/book_controller.js"

const v1Route = Express.Router()
v1Route.get("/books", BookController.List)
v1Route.get("/books/:id", BookController.Show)
v1Route.put("/books/:id", BookController.Update)
v1Route.post("/books", BookController.Create)

export default v1Route
