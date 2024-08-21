import React from "react";
import { format } from "date-fns";
const TodoItem = () => {
  return (
    <div className="flex gap-4 p-2 rounded-lg bg-white">
      <input type="checkbox" name="" id="" />
      <div className="flex flex-col">
        <p className="text-sm font-medium">Cooking</p>
        <p className="text-sm">{format(new Date(), "p, MM/dd/yyyy")}</p>
      </div>
    </div>
  );
};

export default TodoItem;
