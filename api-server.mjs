import Express from "express"
import * as BookController from "./controllers/book_controller.js"

const PORT = process.env.PORT || 3001
const app = Express()
app.use(Express.json())

app.listen(PORT, () => {
  console.log(`PORT: ${PORT} is on!!`)
})

app.get("/ping", (_, res) => {
  res.json({ message: "pong" })
})

const v1Route = Express.Router()
v1Route.get("/books", BookController.List)
v1Route.get("/books/:id", BookController.Show)
v1Route.post("/books", BookController.Create)

app.use("/v1", v1Route)
