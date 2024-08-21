import React, { useState } from "react";
import { motion } from "framer-motion";
import TodoModal from "./TodoModal";
const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex mt-12 justify-between w-[50vw]">
        <button
          className="bg-[#646ff0] text-white px-6 text-lg py-2 font-bold rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Add Task
        </button>
        <select
          name="options"
          className="bg-[#cccdde] px-4 w-40 rounded-lg text-md"
          id="options"
        >
          <option value="incomplete">Incomplete</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default AppHeader;
