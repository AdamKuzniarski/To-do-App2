import styled from "styled-components";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoList";

const initialTodos = [
  { id: "1", text: "Äpfel kaufen", completed: false },
  { id: "2", text: "E-Mail schreiben", completed: true },
  { id: "3", text: "Laufen gehen", completed: false },
];

export default function HomePage() {
  return (
    <Main>
      <Title>To-Do</Title>
      <TodoList todos={initialTodos} />
    </Main>
  );
}

const Main = styled.main`
  max-width: 520px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
`;


