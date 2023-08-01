import React from "react";
import DraggableList from "react-draggable-list";

function Centerbar({ values, handelTextButton }) {
 
  return (
    <div className="h-auto max-w-full mt-1">
      <div className="h-full w-92 mx-auto bg-black rounded-xl">
        <DraggableList
          list={values}
          itemKey="value" 
          template={(value, index) => (
            <div
              key={index}
              className={`text-lg text-white cursor-pointer ${
                value.bold ? "font-bold" : ""
              } ${value.underLine ? "underline" : ""}
              ${value.italics ? "italic" : ""}
              ${value.straightthrough ? "line-through " : ""}`}
              onClick={() => handelTextButton(index)}
            >
              {value.value}
              {console.log(value.bold)}
            </div>
          )}
          
        />
      </div>
    </div>
  );
}

export default Centerbar;
