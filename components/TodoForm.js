import styled from "styled-components";

export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Neues To-Do..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button type="submit">Hinzufügen</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
