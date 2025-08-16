import styled from "styled-components";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import { useState } from "react";

const initialTodos = [
  { id: "1", text: "Äpfel kaufen", completed: false },
  { id: "2", text: "E-Mail schreiben", completed: true },
  { id: "3", text: "Laufen gehen", completed: false },
];

export default function HomePage() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");

  function handleAdd(event) {
    event.preventDefault();
    const clean = text.trim();
    if (!clean) return;

    
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: clean, completed: false },
    ]);
    setText("");
  }
  
  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
  return (
    <Main>
      <Title>To-Do</Title>
      <TodoForm value={text} onChange={setText} onSubmit={handleAdd}>
        {}
      </TodoForm>
      <TodoList todos={todos} onToggle={handleToggle} />
    </Main>
  );
}

const Main = styled.main`
  max-width: 520px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
`;
