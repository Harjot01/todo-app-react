import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="flex mt-12 flex-col p-4 gap-y-4  bg-[#ecedf6] w-[50vw]">
      {todos.length !== 0
        ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : <div className="text-center text-gray-700 text-2xl font-bold">Create a Todo!</div>}
    </div>
  );
};

export default AppContent;
