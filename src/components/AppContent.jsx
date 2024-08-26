import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
          {filteredTodos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <TodoItem todo={todo} />
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <motion.div
          className="text-center text-gray-700 text-2xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Create a Todo!
        </motion.div>
      )}
    </div>
  );
};

export default AppContent;
