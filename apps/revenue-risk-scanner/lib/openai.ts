import OpenAI from "openai";

export function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new OpenAI({ apiKey });
}

export const DEFAULT_MODEL = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";
