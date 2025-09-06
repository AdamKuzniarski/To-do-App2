import styled from "styled-components";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import FilterBar from "@/components/FilterBar";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";

/* const initialTodos = [
  { id: "1", text: "Äpfel kaufen", completed: false },
  { id: "2", text: "E-Mail schreiben", completed: true },
  { id: "3", text: "Laufen gehen", completed: false },
];
 */

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  //  const [todos, setTodos] = useState(initialTodos);
  
  const { data: session, status } = useSession();

  const { data, error, isLoading, mutate } = useSWR(
  status === "authenticated" ? "/api/todos" : null,
  fetcher
);

  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const todos = data ?? [];

  const openCount = useMemo(
    () => todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0),
    [todos]
  );

  const visibleTodos = useMemo(() => {
    if (filter === "open") return todos.filter((t) => !t.completed);
    if (filter === "done") return todos.filter((t) => t.completed);
    return todos; // alle todos werden zurückgegeben
  }, [todos, filter]);

  async function handleAdd(event) {
    event.preventDefault();
    const clean = text.trim();
    if (!clean) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: clean }),
    });
    setText("");
    await mutate();

    /* setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: clean, completed: false },
    ]);
    setText(""); */
  }

  async function handleToggle(id) {
    const current = todos.find((t) => t.id === id);
    if (!current) return;

    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !current.completed }),
    });
    await mutate();
    /*  setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    ); */
  }
  async function handleDelete(id) {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    await mutate();
    /* setTodos((prev) => prev.filter((t) => t.id !== id)); */
  }

  if (error) return <p>Lehler beim Laden.</p>;
  if (isLoading) return <p>Lade...</p>;

  if (status === "loading") return <p>Lade…</p>;
  if (!session) {
    return (
      <Main>
        <Title>To-Do</Title>
        <p>Bitte einloggen, um deine To-Dos zu sehen.</p>
        <AuthButtons />
      </Main>
    );
  }

  return (
    <Main>
      <Title>To-Do</Title>
      <AuthButtons />
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
