const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/analyze", async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Sales call text is required" });
    }
    const prompt = ` You are a professional sales coach. Analyze this sales call: 1. Customer interest (low/medium/high) 2. Salesperson mistakes 3. What salesperson did well 4. Probability of closing the deal 5. How to improve the call Sales call transcript: ${text} `;
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });
        res.json({ analysis: completion.choices[0].message.content });
    } catch (error) {
        console.error("OpenAI API error:", error);
        res.status(500).json({ error: "Failed to analyze the call" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));