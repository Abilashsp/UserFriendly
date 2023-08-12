import React from "react";
import DraggableList from "react-draggable-list";
import { useState, useRef, useEffect } from "react";
import Fileopener from "./Fileopener";

function Centerbar({ values, handelTextButton, activeButton, img,csvData, setCsvData }) {
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

    // console.log("id", item.id, item);

    return (
      <div
        key={item.id}
        className={`text-lg text-white cursor-pointer 
    ${item.textColor}  ${item.textStyle?.join(" ")} ${item.textalign}
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
          <span className={`${item.textBgColor} `}>{item.value}</span>
          <div>
            
            {item.imagevalue && (
              <img
                src={URL.createObjectURL(item.imagevalue)}
                alt="Associated"
                className="w-92 h-60"
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-screen  max-w-full mt-1 overflow-y-scroll">
      <div className="h-full mx-auto bg-black w-92 rounded-xl ">
        <div ref={containerRef} style={{ touchAction: "pan-y" }}>
          <DraggableList
            list={list}
            itemKey="id"
            template={ItemTempalte}
            onMoveEnd={(newList) => _onListChange(newList)}
            container={() => containerRef.current}
          />
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {csvData[0] &&
              csvData[0].map((header, index) => <th scope="col" class="px-6 py-3 border-r-2"key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {csvData.slice(1).map((row, rowIndex) => (
             <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={rowIndex}>
              {row.map((cell, cellIndex) => (
              <td class="px-6 py-4 border-r-2"key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

export default Centerbar;
