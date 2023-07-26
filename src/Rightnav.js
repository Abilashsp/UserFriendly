
import React, { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { AiFillPlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addChild } from './redux/Action'; // Correct the import here
function Rightnav() {







  return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto  h-screen  bg-slate-300 border-2 mt-1 px-6 w-1/4   rounded-lg">
    
    <nav className="flex flex-1 flex-col">
     
    </nav>
  </div>
  )
}

export default Rightnav