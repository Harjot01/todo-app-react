import React, { useState } from "react";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const [todoList, setTodoList] = useState(["Gaming"]);
  return (
    <div className="flex mt-12 flex-col p-4 gap-y-4  bg-[#ecedf6] w-[50vw]">
      <TodoItem />
    </div>
  );
};

export default AppContent;
