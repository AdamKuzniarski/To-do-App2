import styled from "styled-components";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
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
  );
}

const Item = styled.li`
  padding: 4px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: ${(p) => (p.$completed ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;
