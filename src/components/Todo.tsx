"use client";
import React, { useState } from "react";

const Todo = () => {
  const [categories, setCategories] = useState<string[]>([
    "To Do",
    "In Progress",
    "Testing",
    "Done",
    "Pending",
  ]);

  return (
    // <form>
      <div className="flex flex-cols gap-2 justify-between items-center">
        {/* To Do */}
        <div>
          <label htmlFor="title" className="text-black text-sm">
            Judul To Do
          </label>
          <input
            type="text"
            id="title"
            className="border bg-white border-slate-100 rounded-sm bg-transparent py-2 px-80 text-black w-full text-start"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="text-black text-sm">
            Kategori
          </label>
          <select
            id="category"
            className="border bg-white border-slate-100 rounded-sm bg-transparent text-black p-2 w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Delete Button */}

        <div className="mt-6">
          <button
            type="submit"
            className="text-sm bg-[#F1416D]  p-3 rounded-sm "
          >
            <svg
              viewBox="0 0 448 512"
              fill="currentColor"
              height="15"
              width="15"
              className="text-white"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>
        </div>
      </div>

     
    // </form>
  );
};

export default Todo;
