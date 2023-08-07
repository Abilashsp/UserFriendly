import React, { useState } from "react";
import { useSelector } from "react-redux";
import Fileopener from "./Fileopener";

function Rightnav({
  activeButton,
  setActiveButton,
  setInputValue,
  InputValue,
  handleEnter,
  values,
   handelTextButton,
   img,
   setimgs,
   handelimage,
}) {
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEnter();
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto h-screen bg-slate-300 border-2 mt-1 px-6 w-1/4 rounded-lg items-center">
      <nav className="flex items-center">
        {activeButton === 1 && (
          <form className="mb-6" onSubmit={handleSubmit}>
            <input
              type="text"
              id="large-input"
              value={InputValue}
              onChange={handleInputChange}
              placeholder="Enter the Text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-36"
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
            >
              Enter
            </button>
          </form>
        )}
             {activeButton === 2 && (
          <div style={{  top: 0, left: 0, zIndex: 1 }}>
            <Fileopener activeButton={activeButton} setimgs={setimgs} img={img} handelimage={handelimage} />
          </div>
        )}

      </nav>
    </div>
  );
}

export default Rightnav;
