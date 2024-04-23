import OpenAI from "openai";

const openai = new OpenAI();

/* export async function main(description) {
  const image = await openai.images.generate({ prompt: `${description}` });

  return image.data;
} */

export async function main() {
  const image = await openai.images.generate({ prompt: "pupusas" });

  //console.log(image.data)

  return image.data
}



/* image.data returns an array with an object, {url : "..."} */