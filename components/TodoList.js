import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle }) {
  if (!todos?.length) return <p>Keine To-Dos.</p>;
  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} />
      ))}
    </ul>
  );
}
