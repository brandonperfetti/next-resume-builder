import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateResumeText(prompt: string) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt,
    max_tokens: 250,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  return response.choices[0].text.trim();
}