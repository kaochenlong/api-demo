const books = [
  { id: 1, title: "CCC", price: 100 },
  { id: 3, title: "DDD", price: 80 },
  { id: 10, title: "EEE", price: 90 },
]

const List = (_req, res) => {
  const data = {
    records: books,
    count: books.length,
  }

  res.json(data)
}

const Show = (req, res) => {
  const { id } = req.params
  const book = books.find((b) => b.id == id)

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

export { List, Show, Create }
