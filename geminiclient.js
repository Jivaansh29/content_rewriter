const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function rewriteContent(text, style) {
  const prompt = `Rewrite the following text in ${style} style:\n\n"${text}"`;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function translateContent(text, language) {
  const prompt = `Translate the following text to ${language}:\n\n"${text}"`;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { rewriteContent, translateContent };
