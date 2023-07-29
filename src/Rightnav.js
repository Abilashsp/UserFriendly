import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Draggable from 'react-draggable';

function Rightnav({ activeButton, setActiveButton,setInputValue, InputValue }) {
  const buttons = useSelector(state => state.buttons);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto h-screen bg-slate-300 border-2 mt-1 px-6 w-1/4 rounded-lg items-center">
      <nav className="flex items-center">
        {activeButton === 1 && (
          <div className="mb-6">
         
            
              <input
                type="text"
                id="large-input"
                value={InputValue}
                onChange={handleInputChange}
                placeholder='Enter the Text'
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-36"
              />
         
          </div>
        )}
      </nav>
    </div>
  );
}

export default Rightnav;
