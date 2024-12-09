import OpenAI from "openai";
const apiKey = "YOUR-KEY";
const openai = new OpenAI({ apiKey });

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "assistant", content: "給我日本兩日行程" }],
});

console.log(completion["choices"][0]["message"]);
