import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodosFieldsList from "./todosList/ListPerDate/TodosFieldsList";
import TodoList from "./todosList/TodoList";
import { AnimatePresence, motion } from "framer-motion";

export default function ListsSection() {
  const today = moment().startOf("day").unix();
  const status = useSelector((state) => state.status.current);

  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial({
      opacity: 0,
      x: -200,
    });
  }, []);

  return (
    <motion.section
      initial={{
        y: 200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex flex-col justify-start pt-5 landscape:pt-0 m-auto landscape:my-0 w-[350px] lg:w-[500px]"
    >
      <AnimatePresence>
        {status === "today" ? (
          <motion.div
            className="flex flex-col mt-5 shrink-0 pb-10"
            key="aadsjadslkjasdk3745"
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              y: {
                duration: 0.3,
              },

              x: {
                delay: 0.3,
                duration: 0.4,
              },
              opacity: {
                duration: 0.3,
                delay: 0.4,
              },
            }}
            exit={{
              y: 900,
            }}
          >
            <h2 className="text-3xl pb-7  text-[#A7AB0A] m-auto">
              Today's Todos
            </h2>
            <TodosFieldsList date={today} />
          </motion.div>
        ) : (
          <motion.div
            className=" shrink-0"
            key="asdadiaidaiod74375743"
            initial={initial}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              y: {
                duration: 0.3,
              },

              x: {
                delay: 0.3,
                duration: 0.4,
              },
              opacity: {
                duration: 0.4,
                delay: 0.3,
              },
            }}
            exit={{
              y: 900,
            }}
          >
            <TodoList />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
