import styled from "styled-components";

/* Page scaffold */
export const Page = styled.main`
  max-width: 560px;
  margin: 0 auto;
  padding: 16px 16px 96px;
`;

export const SectionCard = styled.section`
  background: var(--surface-elev);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  padding: 14px;
`;

/* Typography */
export const H1 = styled.h1`
  margin: 8px 0 12px;
  letter-spacing: -0.02em;
  font-size: 1.4rem;
`;
export const Subtle = styled.div`
  color: var(--muted);
  font-size: 0.95rem;
`;

/* Button */
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: var(--btn-bg);
  color: var(--btn-text);
  font-weight: 700;
  letter-spacing: 0.2px;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: transform 0.08s ease, filter 0.12s ease, box-shadow 0.12s ease;
  &:hover {
    filter: brightness(0.98);
  }
  &:active {
    transform: translateY(1px) scale(0.995);
    box-shadow: var(--shadow-sm);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Input + Row */
export const Input = styled.input`
  width: 100%;
  padding: 12px 55px;
  border-radius: 12px;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-text);
  box-shadow: inset 0 1px 0 rgba(16, 24, 40, 0.03);
  &::placeholder {
    color: var(--input-placeholder);
  }
`;
export const Row = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

/* Chips (Filter) */
export const Chip = styled.button`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--chip-border);
  background: ${({ active }) => (active ? "var(--pb-500)" : "var(--chip-bg)")};
  color: ${({ active }) => (active ? "#fff" : "var(--chip-text)")};
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s ease, transform 0.06s ease;
  &:hover {
    filter: brightness(0.98);
  }
  &:active {
    transform: translateY(1px);
  }
`;

/* Todo list item */
export const TodoItemCard = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  margin-bottom: 8px;
  
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: ${({ $completed }) =>
    $completed ? "var(--pb-50)" : "var(--surface)"};
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  cursor: pointer;
`;

export const IconButton = styled.button`
  border: 1px solid var(--chip-border);
  background: transparent;
  color: var(--chip-text);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  &:hover {
    background: var(--chip-bg);
  }
`;
