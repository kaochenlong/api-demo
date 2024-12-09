import Express from "express";
import * as Book from "./models/book.mjs";

const PORT = process.env.PORT || 3001;
const app = Express();
app.use(Express.json());

app.listen(PORT, () => {
  console.log(`PORT: ${PORT} is on!!`);
});

app.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

// 書的列表 R
app.get("/v1/books", Book.List);

// 單一書本 R
app.get("/v1/books/:id", Book.Show);

// 新增書本 C
app.post("/v1/books", Book.Create);
