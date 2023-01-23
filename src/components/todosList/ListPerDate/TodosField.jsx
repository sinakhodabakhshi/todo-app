import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldChanged } from "../../../Redux/reducers/date";
import {
  removeTodo,
  editeTodo,
  toggleTodo,
} from "../../../Redux/reducers/todos";
import Form from "../../Form";
import Modal from "../../modal/Modal";
import { motion } from "framer-motion";

import { categoreis } from "../../filters/Filters";

export default function ItemListPerDate({ id }) {
  const [showOptions, setShowOptions] = useState(false);
  const todo = useSelector((state) => state.todos.entities[id]);
  const TodoIcon = categoreis.filter(
    (category) => category.name === todo.type
  )[0].icon;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const modalCloseBtn = (e) => {
    if (e) e.preventDefault();
    setIsOpen(false);
  };

  const formSubmite = (changes) => {
    if (todo.deadLine !== changes.deadLine) {
      dispatch(
        fieldChanged({
          todoId: id,
          dateField: todo.deadLine,
          newDateField: changes.deadLine,
        })
      );
    }
    dispatch(editeTodo({ id, changes: changes }));
    setShowOptions(!showOptions);
    setIsOpen(false);
  };

  if (showOptions) {
    return (
      <motion.li
        key={id}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <article className="flex flex-col w-full rounded-md bg-slate-100 border shadow-md border-gray-500/10  dark:bg-gray-600/20 dark:border-none dark:text-white ">
          <div className="flex  justify-between px-4 pt-2 pb-1 text-center">
            <h3 className="font-bold text-lg ">Todo</h3>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-sm text-black dark:text-white px-[8px] h-[25px] bg-white shadow-sm border dark:border-none border-[#242424]/9 dark:bg-[#242424]/40 rounded-full"
            >
              close
            </button>
          </div>
          <div className="flex flex-col pl-10">
            <p className=""> todo's name : {todo.name}</p>
            <p className="flex items-center">
              type :<TodoIcon />
              {todo.type}
            </p>
            <p className="">
              dead line : {moment.unix(todo.deadLine).format("DD-MM-YYYY")}{" "}
            </p>
            <p className="">compeleted : {todo.compeleted ? "yes" : "no"} </p>
          </div>
          <div className="pt-5 px-5">
            <p>description :</p>
            <div className=" m-auto min-h-[70px] rounded-lg mt-3 bg-white dark:bg-[#242424]/40">
              {todo.description ? (
                <p className="text-sm py-1 px-2"> {todo.description}</p>
              ) : (
                <div className="flex justify-center h-[70px] items-center ">
                  <p className="text-sm text-[#242424]/70 dark:text-white/70">
                    No description added for this todo.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="grow py-5 text-white flex justify-center px-16 text-center">
            <button
              onClick={() => setIsOpen(true)}
              className=" grow bg-green-500 rounded-l-full py-2 px-[20px]"
            >
              Edite
            </button>
            <Modal isOpen={isOpen}>
              <Form
                onSubmit={formSubmite}
                closeForm={modalCloseBtn}
                isEdite={true}
                selectedTodo={todo}
              />
            </Modal>
            <button
              onClick={() =>
                dispatch(removeTodo({ dateField: todo.deadLine, id }))
              }
              className="grow bg-red-600 rounded-r-full py-2 px-4"
            >
              Delete
            </button>
          </div>
        </article>
      </motion.li>
    );
  }
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <article className="flex w-full rounded-md bg-slate-100/40 shadow-md border border-[#242424]/3  dark:bg-gray-600/20 dark:border-none dark:text-white ">
        <div className="grow px-4 py-1">
          <h3 className="font-bold text-lg text-black dark:text-white ">
            {todo.name}
          </h3>
          <p className="flex items-center">
            <TodoIcon />
            {todo.type}
          </p>
        </div>
        <div className="pr-3 my-auto">
          <div className="flex justify-between pr-[5px] w-[80px] items-center py-1">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-sm text-black dark:text-white px-[6px] bg-white shadow-sm dark:bg-gray-400/20 rounded-full"
            >
              details
            </button>
            <input
              onChange={() => dispatch(toggleTodo(todo.id))}
              name="compeleted"
              checked={todo.compeleted}
              type="checkbox"
            />
          </div>
          <time className="text-sm">
            {moment.unix(todo.deadLine).format("DD-MM-YYYY")}
          </time>
        </div>
      </article>
    </motion.li>
  );
}
