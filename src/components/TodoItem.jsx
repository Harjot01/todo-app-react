import React, { useState } from "react";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";
import { motion } from "framer-motion";
import TodoModal from "./TodoModal";
import { MdDelete, MdEdit } from "react-icons/md";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingMode, setEditingMode] = useState(false);

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    dispatch(removeTodo(todo.id));
  };

  const triggerEditEvent = () => {
    setModalOpen(true);
    setEditingMode(true);
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo));
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-row items-center justify-between p-2 bg-white"
        variants={child}
      >
        <div className="flex gap-4 rounded-lg">
          <input
            type="checkbox"
            className="w-5 h-5 mt-3"
            checked={todo.completed}
            onChange={handleToggleTodo}
          />
          <div className="flex flex-col">
            <p
              className={`text-sm font-medium ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </p>
            <p className="text-sm">
              {format(new Date(todo.id), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className="space-x-4">
          <button onClick={triggerEditEvent} className="bg-[#ecedf6] text-xl text-gray-600 p-1 rounded-lg">
            <MdEdit />
          </button>
          <button onClick={handleRemoveTodo} className="bg-[#ecedf6] text-xl text-gray-600 p-1 rounded-lg">
            <MdDelete />
          </button>
        </div>
      </motion.div>

      <TodoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        editingMode={editingMode}
        setEditingMode={setEditingMode}
        todo={todo}
        handleToggleTodo={handleToggleTodo}
      />
    </>
  );
};

export default TodoItem;
