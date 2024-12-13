import Express from "express"
import v1Route from "./routes/v1.js"

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/ping", (_, res) => {
  res.json({ message: "pong" })
})

app.use("/v1", v1Route)

export default app
