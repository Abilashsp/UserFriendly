import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiFillPlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "./redux/Action";
import { AiFillEdit } from "react-icons/ai";
import SubLeftnav from "./SubLeftnav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SubsChild = ({ Childitem, handleDeleteChild, Index, MdDelete, item, handleEditChild }) => {
  const dispatch = useDispatch();

  return (
    <li key={Childitem.name} className="border-2 p-4 bg-white dark:bg-gray-800 rounded-xl">
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold",
                open ? "shadown text-black-400" : "text-black-400"
              )}
            >
              <ChevronRightIcon
                className={classNames(
                  open ? "rotate-90 text-gray-500" : "text-gray-400",
                  "h-5 w-5 shrink-0"
                )}
                aria-hidden="true"
              />
              <span>{Childitem.name}</span>
              <button
                type="button"
                class="hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-5 py-1"
                onClick={() => handleDeleteChild(Index)}
              >
                <MdDelete />
              </button>
              <button
                type="button"
                class="hover:bg-red-700 hover:text-white w-10 focus:outline-none focus:ring-blue-300 rounded-full text-center inline-flex items-center dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 py-1"
                onClick={() => handleEditChild(item.name, true, Index)}
              >
                <AiFillEdit />
              </button>
            </Disclosure.Button>
            <Disclosure.Panel as="ul" className="mt-1 px-2 space-y-1">
              {Childitem.Child.map((ch, index) => (
                <li key={index} className="flex items-center flex-col border-2 rounded-xl bg-blue-200 p-2">
                  <span > {ch.name.textBgColor}</span>
                  <span> {ch.name.textalign}</span>
                  <span>{ch.name.textStyle}</span>
                </li>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
};

export default SubsChild;
