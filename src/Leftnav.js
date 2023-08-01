import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiFillPlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "./redux/Action";
import SubLeftnav from "./SubLeftnav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Leftnav = () => {
  const list = useSelector((state) => state.navigation);
  const [showInput, setShowInput] = useState(false);
  const [menuName, setMenuName] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (menuName.trim() !== "") {
      dispatch(addMenu({ name: menuName }));
      setMenuName("");
      setShowInput(false);
    }
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-300 px-6 mt-1 h-screen w-2/5 rounded-2xl">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col mt-10 ">
          <li>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      "bg-green-500 text-gray-700 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold",
                      open
                        ? "shadown bg-green-600 text-white"
                        : "hover:bg-orange-600  bg-green-700 text-white"
                    )}
                  >
                    <ChevronRightIcon
                      className={classNames(
                        open ? "rotate-90 text-gray-500  " : "text-gray-400",
                        "h-5 w-5 shrink-0 "
                      )}
                      aria-hidden="true"
                    />
                    <span>Menu</span>{" "}
                    <button
                      className="text-xl  "
                      onClick={() => setShowInput(!showInput)}
                    >
                      <AiFillPlusSquare />
                    </button>
                  </Disclosure.Button>
                  {showInput && (
                    <div className="px-2 mt-2">
                      <input
                        type="text"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                        placeholder="Enter Menu Name"
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
                  <Disclosure.Panel as="ul" className="mt-1 px-2 space-y-1">
                    {list.map((item, index) => (
                      <SubLeftnav key={index} item={item} index={index} />
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Leftnav;
