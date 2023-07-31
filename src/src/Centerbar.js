import React from 'react';
import DraggableList from 'react-draggable-list';

function Centerbar({ values }) {
  return (
    <div className="h-auto max-w-full mt-1">
      <div className="h-full w-92 mx-auto bg-stone-600 rounded-xl">
        <DraggableList>
          {values.map((value, index) => (
            <DraggableList.Item key={index}>
              <div className="text-lg text-white cursor-pointer">
                {value}
                {console.log(value)}
              </div>
            </DraggableList.Item>
          ))}
        </DraggableList>
      </div>
    </div>
  );
}

export default Centerbar;
