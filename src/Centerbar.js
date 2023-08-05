import React from "react";
import DraggableList from "react-draggable-list";
import { useState, useRef, useEffect } from "react";
import Fileopener from "./Fileopener";

function Centerbar({ values, handelTextButton ,activeButton,img ,setimgs,handelimage}) {
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
        className={`text-lg text-white cursor-pointer 
    ${item.textColor} ${item.textBgColor} ${item.textStyle?.join(" ") } ${item.textalign}
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
        
     
        <div>
    
    </div>
  
      </div>
    );
  };
  return (
    <div className="h-auto  max-w-full mt-1">
      <div className="h-full mx-auto bg-black w-92 rounded-xl overflow-y-scroll">
      {activeButton === 2 && <Fileopener activeButton={activeButton} setimgs={setimgs} img={img} handelimage={handelimage} />}
        <div ref={containerRef} style={{ touchAction: "pan-y" }}>
          <DraggableList
            list={list}
            itemKey="id"
            template={ItemTempalte}
            onMoveEnd={(newList) => _onListChange(newList)}
            container={() => containerRef.current}
           
          />
        </div>
      
       
        {img.map((image, index) => (
        <div key={index} className="image-container mt-2 h-40 w-72">
          <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} />
         
        </div>
      ))}
       
    
       
       
      </div>
    </div>
  );
}

export default Centerbar;
