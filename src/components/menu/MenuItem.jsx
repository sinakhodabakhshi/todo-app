import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export default function OptionItems({
  title,
  description,
  actionType,
  active,
}) {
  const dispatch = useDispatch();
  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      onClick={() => dispatch({ type: actionType })}
      className="relative top-0 space-y-2 w-[160px] lg:w-[173px] lg:py-3 hover:cursor-pointer bg-slate-100/60 shadow-md rounded-2xl dark:bg-gray-500/10 dark:text-white"
    >
      <h2 className="bg-[#A7AB0A] font-bold rounded-t-2xl px-3 py-1">
        {title}
      </h2>
      <p className="text-sm px-3 pb-2">{description} </p>

      {active && (
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:.8}} className="absolute bg-[#A7AB0A] w-3 h-3 bottom-2 right-4 rounded-full animate-pulse" />
      )}
    </motion.article>
  );
}
