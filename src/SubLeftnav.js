import React, { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addChild } from './redux/Action'; // Correct the import here


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SubLeftnav = ({ item,index }) => { 
    const childlist = item.children;
    console.log(childlist)
  const [showInput, setShowInput] = useState(false);
  const [menuName, setMenuName] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (menuName.trim() !== '') {
      dispatch(addChild(index, { name: menuName })); // Use the addChild action with the parent's index
      setMenuName('');
      setShowInput(false);
    }
  };

  return (
    <li key={item.name} className="border-2 p-4 bg-orange-400 rounded-xl">
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold',
                open ? 'shadown  text-white' : ' text-white'
              )}
            >
              <ChevronRightIcon
                className={classNames(
                  open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                  'h-5 w-5 shrink-0'
                )}
                aria-hidden="true"
              />
              <span>{item.name}</span>
              <button className="text-xl" onClick={() => setShowInput(!showInput)}>
                <AiFillPlusSquare />
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
              {childlist.map((item) => (
                      <li key={item.name} className="border-2 p-2 bg-amber-300 rounded-xl">
                     {item.name}
                     
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
