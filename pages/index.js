import styled from "styled-components";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import FilterBar from "@/components/FilterBar";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import AuthButtons from "@/components/AuthButtons";
import { Page, H1, Subtle, SectionCard } from "@/components/ui/ui";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
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
  }
  async function handleDelete(id) {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    await mutate();
  }

  if (error) return <p>Blad servera.</p>;
  if (isLoading) return <p>Laduje...</p>;

  if (status === "loading") return <p>Lade…</p>;
  if (!session) {
    return (
      <Page>
        <H1>Rybna Lista Zakupow</H1>
        <Subtle>Bitte einloggen, um deine To-Dos zu sehen.</Subtle>
        <AuthButtons />
      </Page>
    );
  }

  return (
    <Page>
      <H1>Rybna Lista Zakupow</H1>
      <AuthButtons />
      <Subtle>{openCount} jeszcze do kupiena...</Subtle>
      <SectionCard>
        <FilterBar value={filter} onChange={setFilter} />
      </SectionCard>
      <SectionCard>
        <TodoForm value={text} onChange={setText} onSubmit={handleAdd} />
      </SectionCard>
      <SectionCard>
        <TodoList
          todos={visibleTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </SectionCard>
    </Page>
  );
}
