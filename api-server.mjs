import Express from "express"
import v1Route from "./routes/v1.js"

const PORT = process.env.PORT || 3001
const app = Express()
app.use(Express.json())

app.listen(PORT, () => {
  console.log(`PORT: ${PORT} is on!!`)
})

app.get("/ping", (_, res) => {
  res.json({ message: "pong" })
})

app.use("/v1", v1Route)
