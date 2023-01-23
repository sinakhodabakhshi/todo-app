import React from "react";
import ListByDate from "./DateFieldsList";

export default function TodoList() {
  return (
    <section className="scrollbar-hide mx-auto my-5 landscape:my-0 w-[350px] lg:w-[500px] lg:pl-10 rounded-md dark:bg-gray-500/10 dark:text-white  ">
      <h2 className="p-2 font-bold bg-[#A7AB0A] rounded-t-md">Todo list</h2>
      <ListByDate />
    </section>
  );
}
