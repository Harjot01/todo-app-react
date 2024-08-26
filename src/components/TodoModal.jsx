import { AnimatePresence, complex } from "framer-motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo, toggleTodo } from "../redux/todoSlice";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};
const TodoModal = ({
  modalOpen,
  setModalOpen,
  editingMode,
  setEditingMode,
  todo,
}) => {
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState(todo?.text);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }
    const newTodo = { id: Date.now(), text: title, completed: false };
    dispatch(addTodo(newTodo));
    setTitle("");
    setModalOpen(false);
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (editTitle.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }
    dispatch(editTodo({ id: todo.id, text: editTitle }));
    setModalOpen(false);
    setEditingMode(false);
  };


  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <form className="flex flex-col gap-4">
              <h1 className="text-[#646681] font-bold text-2xl">
                {editingMode === true ? "Edit Todo" : "Add TODO"}
              </h1>
              {editingMode ? (
                <label
                  htmlFor="title"
                  className="flex text-[#646681] flex-col gap-2"
                >
                  Edit Title
                  <input
                    type="text"
                    id="editTitle"
                    value={editTitle}
                    name="editText"
                    className="h-10 p-2"
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </label>
              ) : (
                <label
                  htmlFor="title"
                  className="flex text-[#646681] flex-col gap-2"
                >
                  Title
                  <input
                    type="text"
                    id="title"
                    value={title}
                    name="text"
                    className="h-10 p-2"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              )}
              <div className="flex gap-4 mt-6">
                {editingMode ? (
                  <button
                    onClick={handleEditTodo}
                    className="bg-[#646ff0] text-white px-6 text-lg py-2 font-medium rounded-lg"
                  >
                    Edit Task
                  </button>
                ) : (
                  <button
                    onClick={handleAddTodo}
                    className="bg-[#646ff0] text-white px-6 text-lg py-2 font-medium rounded-lg"
                  >
                    Add Task
                  </button>
                )}
                <button
                  className="bg-[#cccdde] px-6 py-2 text-lg rounded-lg text-[#646681]"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TodoModal;
