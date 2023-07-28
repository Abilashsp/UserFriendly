import React from 'react';
import { BiText } from 'react-icons/bi';

function Icons({ buttons,activeButton, setActiveButton }) {
  

  return (
    <div className="bg-zinc-400 h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 grid grid-cols-4 gap-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          type="button"
          className="text-white-700 bg-sky-500/50 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 w-6 h-6"
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
}

export default Icons;
