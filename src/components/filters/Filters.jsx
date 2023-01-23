import { Listbox, Transition } from "@headlessui/react";
import moment from "moment/moment";
import React, { Fragment, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useDispatch } from "react-redux";
import {
  ranagePick,
  searched,
  sortBy,
  type,
} from "../../Redux/reducers/filters";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import ClearBtn from "./FiltersClearBtn";

import {
  AcademicCapIcon,
  BookOpenIcon,
  SparklesIcon,
  SquaresPlusIcon,
  BuildingOffice2Icon,
  MusicalNoteIcon,
} from "@heroicons/react/20/solid";

export const categoreis = [
  { id: 1, name: "work", icon: () => <BuildingOffice2Icon className="w-4 mx-1" /> },
  { id: 2, name: "lifestyle", icon: () => <SparklesIcon className="w-4 mx-1" /> },
  { id: 3, name: "school", icon: () => <AcademicCapIcon className="w-4 mx-1" /> },
  { id: 4, name: "research", icon: () => <BookOpenIcon className="w-4 mx-1" /> },
  { id: 5, name: "hobbie", icon: () => <MusicalNoteIcon className="w-4 mx-1" /> },
  { id: 6, name: "others", icon: () => <SquaresPlusIcon className="w-4 mx-1" /> },
];

export default function Filters() {
  const dispatch = useDispatch();

  const [DateRangeVisibility, setVisibility] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(moment().startOf("month")),
      endDate: new Date(moment().endOf("month")),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const startDate = moment(dateRange[0].startDate).unix();
    const endDate = moment(dateRange[0].endDate).unix();
    dispatch(
      ranagePick({
        startDate,
        endDate,
      })
    );
  }, [dateRange, dispatch]);

  const [selectedPeople, setSelectedPeople] = useState([]);
  return (
    <section className="sticky landscape:static dark:dark:bg-[#242424] bg-slate-100 top-0 px-2 lg:px-0 py-2 landscape:py-0 mx-auto space-y-2 mt-12 landscape:mt-0 bg-slate-200/15 flex flex-col w-[365px] lg:w-[400px] dark:text-white justify-center">
      <motion.input
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        onChange={(e) => {
          dispatch(searched(e.target.value));
        }}
        className="focus:outline-none shadow-inner h-9 rounded-md pl-3 bg-white dark:bg-gray-500/10 focus:border-b focus:border-b-[#A7AB0A]/40"
        placeholder="Search your Todo"
        type="text"
      />
      <div className="flex justify-between space-x-2">
        <motion.select
          initial={{
            x: -40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          onChange={(e) => {
            dispatch(sortBy(e.target.value));
          }}
          className="focus:outline-none pl-3 shadow-md bg-white grow rounded-lg  dark:bg-gray-500/10"
        >
          <option value="latest">By latest</option>
          <option value="oldest">By oldest</option>
        </motion.select>

        <div className="relative">
          <motion.button
            initial={{
              x: 30,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            onClick={() => setVisibility(!DateRangeVisibility)}
            className="grow py-2 bg-white shadow-md hover:shadow-md rounded-lg px-3 dark:bg-gray-500/10"
          >
            pick a range
          </motion.button>
          {DateRangeVisibility && (
            <div className=" absolute top-12 right-0 z-20">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  setDateRange([item.selection]);
                }}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between space-x-2">
        <Listbox
          name="assignee"
          value={selectedPeople}
          onChange={(list) => {
            setSelectedPeople(list);
            dispatch(type(list));
          }}
          multiple
        >
          <div className="relative">
            <motion.div
              initial={{
                x: -30,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-500/10  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
                <span className="block truncate">Category</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
            </motion.div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full scrollbar-hide overflow-auto rounded-md bg-white dark:bg-[#2e2e2e] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categoreis.map((Category) => (
                  <Listbox.Option
                    key={Category.id}
                    className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 dark:text-white"
                    value={Category}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {Category.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#A7AB0A]">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <ClearBtn />
      </div>
    </section>
  );
}
