import styled from "styled-components";

export default function TodoItem({ todo, onToggle }) {
  return <Item $completed={todo.completed} onClick={() => onToggle?.(todo.id)}>{todo.text}</Item>;
}

const Item = styled.li`
  padding: 4px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: ${(p) => (p.$completed ? "line-through" : "none")};
`;
