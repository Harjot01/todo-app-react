import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useState } from "react";

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
const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState("");
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
            <form action="" className="flex flex-col gap-4">
              <h1 className="text-[#646681] font-bold text-2xl">Add TODO</h1>

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
                  className="h-10"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label
                htmlFor="type"
                className="flex text-[#646681] flex-col gap-2"
              >
                Status
                <select id="type" className="h-10">
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>
              <div className="flex gap-4 mt-6">
                <button className="bg-[#646ff0] text-white px-6 text-lg py-2 font-medium rounded-lg">
                  Add Task
                </button>
                <button
                  className="bg-[#cccdde] px-6 py-2 text-lg rounded-lg text-[#646681]"
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
