import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiFillPlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addChild } from "./redux/Action";
import { MdDelete } from "react-icons/md";
import { deleteMenu } from "./redux/Action";
import { deleteChild } from "./redux/Action";
import { IoIosAdd } from "react-icons/io";
import { editMenu } from "./redux/Action";
import { editChild } from "./redux/Action";
import { AiFillEdit } from "react-icons/ai";
import Draggable from "react-draggable";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SubLeftnav = ({ item, index }) => {
  const [ChildIndex, setChildIndex] = useState(null);
  const [isChild, setIsChild] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [menuName, setMenuName] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (menuName.trim() !== "") {
      if (editMode) {
        if (isChild) {
          dispatch(editChild(index, ChildIndex, menuName));
        } else {
          dispatch(editMenu(index, menuName));
        }
      } else {
        // dispatch(addChild(index, menuName));
      }
      setShowInput(false);
      setEditMode(false);
      setIsChild(false); // Reset the isChild state after handling the edit
    }
  };

  const handledelete = (menuindex) => {
    dispatch(deleteMenu(menuindex));
  };

  const handleDeleteChild = (childIndex) => {
    dispatch(deleteChild(index, childIndex));
  };

  const handleEditMenu = () => {
    setMenuName(item.name);
    setShowInput(true);
    setEditMode(true);
  };

  const handleEditChild = (childName, isChild, childIndex) => {
    setMenuName(childName);
    setShowInput(true);
    setEditMode(true);
    setIsChild(isChild);
    setChildIndex(childIndex);
  };

  return (
    <li
      key={item.name}
      className="border-2 p-4  bg-white dark:bg-gray-800 rounded-xl"
    >
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold",
                open ? "shadown  text-black-400" : "text-black-400"
              )}
            >
              <ChevronRightIcon
                className={classNames(
                  open ? "rotate-90 text-gray-500" : "text-gray-400",
                  "h-5 w-5 shrink-0"
                )}
                aria-hidden="true"
              />
              <span>{item.name}</span>

              <button
                type="button"
                class="text-black-400 w-10 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-1 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setMenuName("");
                  setShowInput(!showInput);
                  setEditMode(false);
                }}
              >
                <IoIosAdd className="text-xl" />
              </button>

              <button
                type="button"
                class=" hover:bg-red-700 hover:text-white  w-10 focus:outline-none focus:ring-blue-300  rounded-full   text-center inline-flex items-center  dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 py-1"
                onClick={() => handledelete(index)}
              >
                <MdDelete classname=" text-2xl" />
              </button>
              <button
                type="button"
                class=" hover:bg-red-700 hover:text-white  w-10 focus:outline-none focus:ring-blue-300  rounded-full   text-center inline-flex items-center  dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 py-1"
                onClick={handleEditMenu}
              >
                <AiFillEdit />
              </button>
            </Disclosure.Button>
            {showInput && (
              <div className="px-2 mt-2">
                <input
                  type="text"
                  value={menuName}
                  onChange={(e) => setMenuName(e.target.value)}
                  placeholder="Enter File Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="mt-2">
                  <button
                    className="text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            <Disclosure.Panel className="mt-1 px-2 space-y-1">
              {item.children.map((item, Index) => (
                <li
                  key={Index}
                  className="border-2 p-4 bg-amber-300 rounded-xl flex justify-around"
                >
                  <span> {item.name}</span>
                  <button
                    type="button"
                    class=" hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full   text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-5 py-1"
                    onClick={() => handleDeleteChild(Index)}
                  >
                    <MdDelete />
                  </button>
                  <button
                    type="button"
                    class=" hover:bg-red-700 hover:text-white  w-10 focus:outline-none focus:ring-blue-300  rounded-full   text-center inline-flex items-center  dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 py-1"
                    onClick={() => handleEditChild(item.name, true, Index)}
                  >
                    <AiFillEdit />
                  </button>
                </li>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
};

export default SubLeftnav;
