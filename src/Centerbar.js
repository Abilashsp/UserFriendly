import React from "react";
import DraggableList from "react-draggable-list";
import { useState, useRef,useEffect } from "react";

function Centerbar({ values, handelTextButton }) {
  // console.log("values", values);
  const [list, setList] = useState(values);

  useEffect(() => {
    // Update the list state whenever the "values" prop changes
    setList(values);
  }, [values]);


  const _onListChange = (newList) => {
    setList(newList);
  };
  const containerRef = useRef();

  const ItemTempalte = ({ item, dragHandleProps }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;

  console.log("id", item.id);

    return (
      <div
        key={item.id}
        className={`text-lg text-white cursor-pointer ${
          item.bold ? "font-bold" : ""
        } ${item.underLine ? "underline" : ""}
    ${item.italics ? "italic" : ""}
    ${item.straightthrough ? "line-through " : ""}
    
    ${item.textaligncenter ? "text-center" : ""}
    ${item.textalignright? "text-left" : ""}
    ${item.textalignleft? "text-right" : ""}
    ${item. textjustify ? "text-justify" : ""}

    
    ${item. textblack ? "text-black" : ""}
    ${item.textviolet ? "text-violet-600" : ""}
    ${item.textblue ? "text-blue-600" : ""}
    ${item.textgreen ? "text-green-600" : ""}
    ${item.  textred ? "text-red-600" : ""}
    ${item.  textbrown ? "text-amber-800" : ""}
    ${item. textorange ? "text-orange-600" : ""}
    ${item. textgray ? "text-gray-600 " : ""}

    ${item. textbgpink ? "bg-pink-400 " : ""}
    ${item. textbgyellow ? "bg-yellow-400 " : ""}
    ${item. textbgLightblue? "bg-blue-200" : ""}
    ${item.textbgblack ? "bg-slate-950 " : ""}
    ${item. textbgviolet ? "bg-violet-500" : ""}
    ${item.textbgblue ? "bg-blue-900 " : ""}
    ${item. textbggreen ? "bg-green-900 " : ""}
    ${item. textbgred ? "bg-red-700" : ""}
    ${item.  textbgbrown ? "bg-amber-900 " : ""}
    ${item. textbgorange ? "bg-orange-600 " : ""}
    ${item. textbgindigo? "bg-indigo-950 " : ""}

    


    `}
        onClick={() => handelTextButton(item.id)}
      >
       

        <div
         
          onTouchStart={(e) => {
            e.preventDefault();
            console.log("touchStart");
             e.target.style.backgroundColor = "blue";
            document.body.style.overflow = "hidden";
            onTouchStart(e);
          }}
          onMouseDown={(e) => {
            console.log("mouseDown");
            document.body.style.overflow = "hidden";
            onMouseDown(e);
          }}
          onTouchEnd={(e) => {
             e.target.style.backgroundColor = "black";
            document.body.style.overflow = "visible";
          }}
          onMouseUp={() => {
            document.body.style.overflow = "visible";
          }}
        >
           {item.value}
        </div>
      </div>
    );
  };
  return (
    <div className="h-auto max-w-full mt-1">
      <div className="h-full mx-auto bg-black w-92 rounded-xl">
        <div
          ref={containerRef}
          style={{ touchAction: "pan-y" }}
        >
          <DraggableList
            list={list}
            itemKey="id"
            template={ItemTempalte}
            onMoveEnd={(newList) => _onListChange(newList)}
            container={() => containerRef.current}
            lockVertically={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Centerbar;
