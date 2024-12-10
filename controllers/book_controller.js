import { loadBook, getBook } from "../models/book.js"

const books = await loadBook()

const List = (_req, res) => {
  const data = {
    records: books,
    count: books.length,
  }

  res.json(data)
}

const Show = async (req, res) => {
  const { id } = req.params
  const book = await getBook(id)

  if (book) {
    res.json(book)
  } else {
    res.status(404)
    res.json({ message: "not found" })
  }
}

const Create = (req, res) => {
  const { title, price } = req.body
  if (title && price) {
    // 寫入
    const book = { id: 123, title, price }
    res.json(book)
  } else {
    res.status(400)
    res.json({ message: "format error" })
  }
}

const Update = async (req, res) => {
  const id = req.params.id
  const { title, price } = req.body

  const book = await getBook(id)

  if (book) {
    if (title && price) {
      // 更新
      res.json({ id: book.id, title, price })
    } else {
      res.status(400)
      res.json({ message: "format error" })
    }
  } else {
    res.status(404)
    res.json({ message: "not found" })
  }
}

const Delete = async (req, res) => {
  const id = req.params.id
  const book = await getBook(id)

  if (book) {
    // 刪除
    res.json({ message: `book ${book.title} deleted` })
  } else {
    res.status(404)
    res.json({ message: "not found" })
  }
}

export { List, Show, Create, Update, Delete }
