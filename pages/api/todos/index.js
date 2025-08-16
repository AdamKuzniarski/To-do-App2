import { connectToDatabase } from "@/lib/mongoose";
import Todo from "@/models/Todo";

export default async function handler(req, res) {
  const { method } = req;
  await connectToDatabase();

  if (method === "GET") {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 }).lean();
      return res.status(200).json(todos);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "GET/todos failed" });
    }
  }

  if (method === "POST") {
    try {
      const { text } = req.body || {};
      const clean = (text || "").trim();
      if (!clean) {
        return res.status(400).json({ error: "Bitte 'Text' senden." });
      }
      const created = await Todo.create({ text: clean, completed: false });
      return res.status(201).json(created);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "POST / todos failed" });
    }
}
res.setHeader("Allow", ["GET", "POST"]);
return res.status(405).json({ error: "Method Not Allowed" });
}
