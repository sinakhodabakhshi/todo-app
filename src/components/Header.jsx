import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [documentVisible, setDocumentVisible] = useState(false);
  return (
    <header className="flex landscape:sticky landscape:top-0 lg:px-20  z-40 dark:bg-[#242424] bg-slate-100 shrink-0 justify-between p-5 landscape:py-[10px] ">
      <motion.h1
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=" font-bold  text-lg dark:text-white"
      >
        Todo List
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        onClick={() => setDocumentVisible(!documentVisible)}
        className="cursor-pointer"
      >
        <DocumentIcon className="w-6" />
      </motion.div>
      <AnimatePresence>
        {documentVisible && (
          <motion.div
            key="document347724982hgfjad"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 bg-[#242424]/80 z-[99]"
            onClick={() => setDocumentVisible(!documentVisible)}
          >
            <article className="text-white z-[99]">
              <h3 className="text-lg mb-4 font-bold">Document</h3>
              <section className="w-[400px] lg:w-[500px]">
                <ol className="space-y-2 list-decimal pl-5">
                  <li>
                    <p>
                      this app is fully responsive (dark mode , small screens ,
                      landscape , ...)
                    </p>
                  </li>
                  <li>
                    <p>
                      data used in this app is normalized , and the
                      goal for it was a better rendering performance by React
                    </p>
                  </li>
                  <li>
                    <p>the app use local storage for storing data</p>
                  </li>
                </ol>
              </section>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
