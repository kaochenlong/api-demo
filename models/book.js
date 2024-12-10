import { readFile } from "fs/promises"

async function loadBook() {
  const file = process.cwd() + "/data/book.json"
  const content = await readFile(file)
  return JSON.parse(content)
}

async function getBook(id) {
  const books = await loadBook()
  return books.find((book) => {
    return book.id == id
  })
}

export { loadBook, getBook }
