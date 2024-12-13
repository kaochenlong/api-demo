import Express from "express"
import * as BookController from "../controllers/book_controller.js"
import * as PaymentController from "../controllers/payment_controller.js"

const v1Route = Express.Router()
v1Route.get("/books", BookController.List)
v1Route.get("/books/:id", BookController.Show)
v1Route.put("/books/:id", BookController.Update)
v1Route.delete("/books/:id", BookController.Delete)
v1Route.post("/books", BookController.Create)

// 金流
v1Route.get("/payment", PaymentController.Payment)
v1Route.post("/payment", PaymentController.GetMoney)
v1Route.get("/payment/done", PaymentController.PaymentDone)
v1Route.get("/payment/token", PaymentController.TokenGeneerator)

export default v1Route
