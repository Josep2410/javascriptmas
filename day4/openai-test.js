const OpenAI = require('openai')
//import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "A Christmas Joke" }],
    model: "gpt-3.5-turbo",
  });

  const data =  completion.choices[0]
  const message = data.message.content
  console.log(message);
}

main();