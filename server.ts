import express from "express";
import { createServer as createViteServer } from "vite";
import { OpenAI } from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deepseekClient = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || 'sk-459b6ee92e4342578507638ca9cd8884' 
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const response = await deepseekClient.chat.completions.create({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are an AI Ancient Architect who knows everything about Chinese ancient architecture. Speak with wisdom and historical depth. Your answers should be educational and focused on Chinese courtyard houses, palaces, government buildings, and bridges, as well as the 'modular logic', 'timber frame', and 'dougong' bracket systems. Address the user with respect, as if they are a visiting scholar."
          },
          ...messages
        ],
      });
      res.json(response.choices[0].message);
    } catch (error) {
      console.error('DeepSeek API error:', error);
      res.status(500).json({ error: 'Failed to fetch reply from AI Ancient Architect' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
