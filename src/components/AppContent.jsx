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

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex mt-5 flex-col p-4 gap-y-4 bg-[#ecedf6] md:w-[50rem] sm:w-[40rem] w-[30rem] rounded-lg"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodos.length !== 0 ? (
          filteredTodos.map((todo) => (
    
              <TodoItem todo={todo} />
          ))
        ) : (
          <motion.div
            className="text-center text-gray-700 text-2xl font-bold"
            variants={child}
          >
            Create a Todo!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppContent;
