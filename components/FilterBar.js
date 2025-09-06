
import { Chip, Row } from "./ui/ui";

export default function FilterBar({ value, onChange }) {
  return (
    <Row role="tablist" aria-label="To-Do Filter">
      {[
        { key: "all", label: "All" },
        { key: "open", label: "Do kupienia" },
        { key: "done", label: "Kupione!" },
      ].map((f) => (
        <Chip
          key={f.key}
          $active={value === f.key}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </Chip>
      ))}
    </Row>
  );
}

