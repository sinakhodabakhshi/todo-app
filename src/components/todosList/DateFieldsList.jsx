import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sortBySelector } from "../../selectors/dateFields";
import { AnimatePresence, motion } from "framer-motion";
import DateField from "./DateField";

export default function ListByDate() {
  const todosDates = useSelector((state) => sortBySelector(state));
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    setInitial({
      x: 50,
      opacity: 0,
    });
  }, []);

  return (
    <AnimatePresence>
      {todosDates.length === 0 ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="flex justify-center items-center bg-slate-100/60 shadow-md py-10 dark: dark:bg-gray-600/5 rounded-b-md"
        >
          <p className="text-[#242424]/70 dark:text-white/70">
            Please add a todo
          </p>
        </motion.div>
      ) : (
        <motion.ol
          initial={false}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          exit={{
            x: -50,
            opacity: 0,
          }}
          key={"dateField9234843dad"}
          className="p-2 space-y-2 bg-slate-100/60 shadow-md py-6 dark: dark:bg-gray-600/5 rounded-b-md"
        >
          <AnimatePresence>
            {todosDates.map((date) => (
              <motion.div
                key={date}
                initial={initial}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                exit={{
                  x: -50,
                  opacity: 0,
                }}
              >
                <DateField key={date} date={date} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.ol>
      )}
    </AnimatePresence>
  );
}
