import { GoogleGenerativeAI } from "@google/generative-ai";

// API key to test
const API_KEY = "AIzaSyBQOuSoBLcxxbS4eNyCoix6soNL3VYw3oA";
const MODEL_NAME = "gemini-2.0-flash"; // Using the model from your .env

async function testApiKey() {
  try {
    console.log("Testing API key...");
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    
    // Simple test prompt
    const result = await model.generateContent("Hello, are you working?");
    const response = await result.response;
    console.log("API key is valid! Response:", response.text());
    return true;
  } catch (error) {
    console.error("API key validation failed:", error.message);
    return false;
  }
}

testApiKey(); 