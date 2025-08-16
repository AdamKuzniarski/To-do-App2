import TodoList from "@/components/TodoList";

const initialTodos = [
  { id: "1", text: "Äpfel kaufen", completed: false },
  { id: "2", text: "E-Mail schreiben", completed: true },
  { id: "3", text: "Laufen gehen", completed: false },
];

export default function HomePage(){
  return(
    <main>
      <h1>To-Do</h1>
      <TodoList todos={initialTodos}/>
    </main>
  )
}
