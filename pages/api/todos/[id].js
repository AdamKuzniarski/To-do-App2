import { connectToDatabase } from "@/lib/mongoose";
import Todo from "@/models/Todo";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await connectToDatabase();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Ungültige ID" });
  }
  if (method === "GET") {
    try {
      const todo = await Todo.findById(id).lean();
      if (!todo) return res.status(404).json({ error: "Nicht gefunden" });
      return res.status(200).json(todo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "/todos/:id failed" });
    }
  }

  if (method === "PATCH") {
    try {
      const { text, completed } = req.body || {};
      const patch = {};
      if (typeof text === "string" && text.trim()) patch.text = text.trim();
      if (typeof completed === "boolean") patch.completed = completed;

      if (!Object.keys(patch).length) {
        return res.status(400).json({ error: "Nichts zu aktualisieren" });
      }

      const updated = await Todo.findByIdAndUpdate(id, patch, {
        new: true,
        runValidators: true,
      });
      if (!updated) return res.status(404).json({ error: "Nicht gefunden" });
      return res.status(200).json(updated);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "PATCH /todos/:id failed" });
    }
  }

  if (method === "DELETE") {
    try {
      const deleted = await Todo.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: "Nicht gefunden" });
      return res.status(204).end();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "DELETE /todos/:id failed" });
    }
  }

  res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
  return res.status(405).json({ error: "Method Not Allowed" });
}
