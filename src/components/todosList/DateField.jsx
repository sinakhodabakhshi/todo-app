import moment from "moment";
import { Disclosure, Transition } from "@headlessui/react";
import { CalendarDaysIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import TodosFieldsList from "./ListPerDate/TodosFieldsList";

export default function ItemListbyDate({ date }) {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="sticky top-[146px] landscape:top-12 z-20  flex w-full justify-between rounded-lg bg-[#A7AB0A] px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-[#242424] focus-visible:ring-opacity-75">
              <p className="flex items-center"><CalendarDaysIcon className="w-5 mr-1" /> {moment.unix(date).format("DD-MM-YYYY")}</p>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-white`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                <TodosFieldsList date={date} />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
}
