import styled from "styled-components";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import FilterBar from "@/components/FilterBar";
import { useMemo, useState } from "react";

const initialTodos = [
  { id: "1", text: "Äpfel kaufen", completed: false },
  { id: "2", text: "E-Mail schreiben", completed: true },
  { id: "3", text: "Laufen gehen", completed: false },
];

export default function HomePage() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

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
  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const openCount = useMemo(
    () => todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0),
    [todos]
  );

  const visibleTodos = useMemo(() => {
    if (filter === "open") return todos.filter((t) => !t.completed);
    if (filter === "done") return todos.filter((t) => t.completed);
    return todos; // alle todos werden zurückgegeben
  }, [todos, filter]);
  return (
    <Main>
      <Title>To-Do</Title>
      <Counter>{openCount} offen</Counter>
      <FilterBar value={filter} onChange={setFilter} />
      <TodoForm value={text} onChange={setText} onSubmit={handleAdd} />

      <TodoList
        todos={visibleTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
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

const Counter = styled.div`
  opacity: 0.8;
  margin-bottom: 8px;
`;
