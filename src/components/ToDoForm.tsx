"use client";
import React, { useState } from "react";
import Todo from "./Todo";

interface ITodoProps {
  id: number;
  title: string;
}
const ToDoForm: React.FC<ITodoProps> = () => {
  const [addTodo, setSddTodo] = useState(false);

  const handleClick = () => {
    setSddTodo(true);
  };

  return (
    <div className="p-10 ">
      <div className="flex flex-cols justify-between">
        <div className="text-black">To Do List</div>
        <button
          className="bg-[#FFE2E5] text-[#F1416D] p-1 rounded-sm"
          onClick={handleClick}
        >
          + Tambah To Do
        </button>
      </div>

      <div>
        <form action="">
          <Todo /> && {addTodo && <Todo />}
          <button
            type="submit"
            className="bg-green-600 p-2 rounded-sm mt-3 w-full text-white"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToDoForm;
