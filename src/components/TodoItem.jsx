import React, { useState } from "react";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../redux/todoSlice";
import TodoModal from "./TodoModal";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingMode, setEditingMode] = useState(false);

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    dispatch(removeTodo(todo.id));Coding
  };

  const triggerEditEvent = () => {
    setModalOpen(true);
    setEditingMode(true);
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo));
  };


  return (
    <>
      <div className="flex flex-row items-center justify-between p-2 bg-white">
        <div className="flex gap-4 rounded-lg">
          <input
            type="checkbox"
            className="w-5 h-5 mt-3"
            checked={todo.completed}
            onChange={handleToggleTodo}
          />
          <div className="flex flex-col">
          <p className={`text-sm font-medium ${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </p>
            <p className="text-sm">
              {format(new Date(todo.id), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className="space-x-4">
          <button onClick={triggerEditEvent}>
            <img src="./editIcon.png" width="20px" height="5px" alt="" />
          </button>
          <button onClick={handleRemoveTodo}>
            <img src="./dltIcon.png" width="20px" height="5px" alt="" />
          </button>
        </div>
      </div>

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
