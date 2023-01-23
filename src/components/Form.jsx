import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { AnimatePresence, motion } from "framer-motion";
import { categoreis } from "./filters/Filters";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Form({ closeForm, onSubmit, isEdite, selectedTodo }) {
  const [formInputs, setInputs] = useState({
    name: isEdite ? selectedTodo.name : "",
    type: isEdite ? selectedTodo.type : "work",
    description: isEdite ? selectedTodo.description : "",
  });

  const [error, setErorr] = useState(false);

  const DateInitial = isEdite
    ? new Date(selectedTodo.deadLine * 1000)
    : new Date();
  const [deadLine, setDeadLine] = useState(DateInitial);

  const oninputChannge = (e) => {
    setInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{
        y: 50,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (formInputs.name) {
          onSubmit({
            ...formInputs,
            deadLine: moment(deadLine).startOf("day").unix(),
            compeleted: false,
          });
        } else {
          setErorr(true);
        }
      }}
      className="flex flex-col py-7 px-5 space-y-2 w-[320px] rounded-xl dark:text-white bg-slate-100 dark:bg-[#201f1f]"
    >
      <div className="flex justify-between items-center text-[#A7AB0A]">
        <h2 className="font-bold text-lg">
          {isEdite ? "Edite Todo" : "Add Todo"}
        </h2>
        <button
          onClick={closeForm}
          className=""
        >
          <XMarkIcon className="text-white w-7 p-1 text-center rounded-full bg-[#A7AB0A]" />
        </button>
      </div>
      <input
        value={formInputs.name}
        onChange={(e) => {
          oninputChannge(e);
          setErorr(false);
        }}
        name="name"
        className="focus:outline-none text-[#242424] dark:text-white h-8 rounded-md pl-3 shadow-inner border dark:border-none border-[#242424]/5 dark:bg-gray-500/10"
        placeholder="Todos's name"
        type="text"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 17,
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="text-sm text-red-700 mx-auto cursor-default"
          >
            you should add a name for your todo
          </motion.p>
        )}
      </AnimatePresence>
      <div className="flex justify-between space-x-2">
        <select
          value={formInputs.type}
          name="type"
          onChange={oninputChannge}
          className="focus:outline-none text-sm text-[#242424] dark:text-white font-bold pl-3 grow rounded-md bg-white shadow-sm  dark:bg-gray-500/10"
        >
          {categoreis.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <DatePicker
          selected={deadLine}
          onChange={(date) => setDeadLine(date)}
          className="px-12 dark:text-white text-[#242424] py-2 rounded-md w-[183px] bg-white shadow-sm dark:bg-gray-500/10 "
        />
      </div>
      <textarea
        value={formInputs.description}
        name="description"
        onChange={oninputChannge}
        placeholder="Description(optional)"
        className="focus:outline-none text-[#242424] dark:text-white p-2 w-full h-[200px] lg:landscape:h-[200px]  sm:landscape:h-[70px]  sm:landscape:resize-none shadow-inner border dark:border-none border-[#242424]/5 dark:bg-gray-500/10"
      />
      <button type="submit" className="bg-[#A7AB0A] rounded-md p-2">
        {isEdite ? "Edite Todo" : "Add Todo"}
      </button>
    </motion.form>
  );
}
