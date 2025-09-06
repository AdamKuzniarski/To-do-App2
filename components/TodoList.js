import TodoItem from "./TodoItem";
import styled from "styled-components";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos?.length) return <Empty>Keine To-Dos.</Empty>;
  return (
    <List>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Empty = styled.p`
  opacity: 0.7;
  font-style: italic;
`;
