import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = ({ filter }) => {
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
  });

  return (
    <div className="flex mt-12 flex-col p-4 gap-y-4  bg-[#ecedf6] w-[50vw]">
      {filteredTodos.length !== 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div className="text-center text-gray-700 text-2xl font-bold">
          Create a Todo!
        </div>
      )}
    </div>
  );
};

export default AppContent;
