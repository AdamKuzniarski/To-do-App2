export default function TodoItem({ todo, onToggle }) {
  return <li onClick={() => onToggle?.(todo.id)}>{todo.text}</li>;
}
