import styled from "styled-components";
import { TodoItemCard, IconButton } from "./ui/ui";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <TodoItemCard>
      <Item $completed={todo.completed} onClick={() => onToggle?.(todo.id)}>
        <span>{todo.text}</span>
        <DeleteButton
          aria-label={`Löschen: ${todo.text}`}
          onClick={(event) => {
            event.stopPropagation();
            onDelete?.(todo.id);
          }}
        >
          X
        </DeleteButton>
      </Item>
    </TodoItemCard>
  );
}

const Item = styled.li`
  padding: 4px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: ${(p) => (p.$completed ? "line-through" : "none")};
`;

const DeleteButton = styled(IconButton)`
  border: none;
  color: var(--pb-600);
  background: var(--pb-100);
  font-weight: bold;
  &:hover {
    background: var(--pb-200);
    color: var(--pb-800);
  }


`;
