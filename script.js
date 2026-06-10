import OpenAI from "openai";

export const handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a fantasy RPG dungeon master." },
      { role: "user", content: message }
    ]
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: response.choices[0].message.content
    })
  };
};


