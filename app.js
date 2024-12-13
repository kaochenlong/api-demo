import Express from "express"
import v1Route from "./routes/v1.js"
import cors from "cors"

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

app.set("view engine", "ejs")

app.get("/ping", (_, res) => {
  res.json({ message: "pong" })
})

app.use("/v1", v1Route)

export default app
