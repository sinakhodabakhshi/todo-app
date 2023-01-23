import React from "react";
import { useClearCompeleted } from "../../helpers";
import { motion } from "framer-motion";

export default function ClearBtn() {
  const clear = useClearCompeleted();

  return (
    <motion.button
      initial={{
        x: 40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      onClick={() => clear()}
      className="grow py-2 bg-white shadow-md transition-shadow rounded-md px-0 dark:bg-gray-500/10"
    >
      clear completed
    </motion.button>
  );
}
