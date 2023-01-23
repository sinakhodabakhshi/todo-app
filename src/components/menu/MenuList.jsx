import React from "react";
import MenuItem from "./MenuItem";
import { currentStatusSelector } from "../../selectors/todosSelector";
import { useSelector } from "react-redux";

const menuList = [
  {
    title: "Todos list",
    description: "see full list of your todos . ",
    actionType: "listStatus",
    status: "list",
  },
  {
    title: "Today's todos",
    description: "see what you shuold do now !",
    actionType: "todayStatus",
    status: "today",
  },
];

export default function OptionList() {
  const status = useSelector(currentStatusSelector);
  return (
    <section className="mx-auto w-[350px] lg:w-[400px] pt-8 flex justify-between z-20 ">
      {menuList.map((option) => {
        return (
          <MenuItem
            key={option.title}
            title={option.title}
            actionType={option.actionType}
            description={option.description}
            active={status === option.status}
          />
        );
      })}
    </section>
  );
}
