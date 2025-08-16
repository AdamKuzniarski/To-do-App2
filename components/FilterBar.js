import styled from "styled-components";

export default function FilterBar({ value, onChange }) {
  return (
    <Bar role="tablist" aria-label="To-Do Filter">
      {[
        { key: "all", label: "Alle" },
        { key: "open", label: "Offen" },
        { key: "done", label: "Erledigt" },
      ].map((f) => (
        <FilterButton
          key={f.key}
          $active={value === f.key}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </FilterButton>
      ))}
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0 16px;
`;

const FilterButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  background: ${(p) => (p.$active ? "#eee" : "transparent")};
`;
