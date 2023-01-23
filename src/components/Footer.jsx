import { PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/reducers/todos";
import Form from "./Form";
import Modal from "./modal/Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const modalCloseBtn = (e) => {
    if (e) e.preventDefault();
    setIsOpen(false);
  };

  const formSubmite = (todo) => {
    const id = Math.random() * 1003554356534;
    dispatch(addTodo({ ...todo, id }));
    setIsOpen(false)
  };

  return (
    <footer className="scrollbar-hide">
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-2 p-2 bg-[#A7AB0A] rounded-full text-white"
      >
        <PlusIcon className="w-10" />
      </button>

      <Modal isOpen={isOpen}>
        <Form
          onSubmit={formSubmite}
          closeForm={modalCloseBtn}
          isEdite={false}
        />
      </Modal>
    </footer>
  );
}
