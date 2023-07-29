import React from 'react';
import Draggable from 'react-draggable';

function Centerbar({ InputValue }) {
  return (
    <div className="h-auto max-w-full mt-1">
      <div className="h-full w-92 mx-auto bg-stone-600 rounded-xl">
        <Draggable>
          <div className="text-lg text-white cursor-pointer">
          {InputValue}
          </div>
       
        </Draggable>
      </div>
    </div>
  );
}

export default Centerbar;
