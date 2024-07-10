const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDRjG3DaP3KoFZinLggs_7D28vQjU68qoI");

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

