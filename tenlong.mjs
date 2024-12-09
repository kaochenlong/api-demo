import ax from "axios";
import * as ch from "cheerio";

const url = "https://www.tenlong.com.tw/zh_tw/recent_bestselling?range=7";

const { data } = await ax.get(url);
const $ = ch.load(data);

const books = [];
$(".single-book .title a").each((i, book) => {
  books.push(`${i + 1}. ${book.attribs.title}`);
});

console.log(books.join("\n"));
