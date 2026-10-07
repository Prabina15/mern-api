import { GoogleGenAI } from '@google/genai';
import config from '../config/config.js';

const ai = new GoogleGenAI({ apiKey: config.geminiApiKey });

const MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.1-pro-preview',
];

const promptAI = async (promptMessage) => {
  let lastError;

  for (const model of MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: promptMessage,
        });
        console.log(`[AI Response using ${model}]:`, response.text);
        return response.text;
      } catch (error) {
        lastError = error;
        console.warn(`Attempt ${attempt} for model ${model} failed: ${error.message || error}`);
        // If it's a 503 high demand / rate limit issue, wait briefly before retrying
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  throw lastError || new Error("Failed to generate AI response from available models");
};

export default promptAI;