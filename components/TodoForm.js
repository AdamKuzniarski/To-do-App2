import styled from "styled-components";
import { Button, Input, Row } from "./ui/ui";

export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Input
          type="text"
          placeholder="Nowe chrupanie..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Row>
      <Button type="submit">Dodaj</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
