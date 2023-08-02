import React from "react";
import DraggableList from "react-draggable-list";

function Centerbar({ values, handelTextButton }) {
  // console.log("values", values);

  const ItemTempalte = ({ item, ...rest }) => {
    console.log("id",item.id);
    // TODO : Index is not passed, so have the id in the values object
    return (
      <div
        key={item.id}
        className={`text-lg text-white cursor-pointer ${
          item.bold ? "font-bold" : ""
        } ${item.underLine ? "underline" : ""}
    ${item.italics ? "italic" : ""}
    ${item.straightthrough ? "line-through " : ""}`}
        onClick={() => handelTextButton(item.id)}
      >
        {item.value}
        {/* {console.log(item.bold)} */}
      </div>
    );
  };
  return (
    <div className="h-auto max-w-full mt-1">
      <div className="h-full mx-auto bg-black w-92 rounded-xl">
        <DraggableList list={values} itemKey="value" template={ItemTempalte} />
      </div>
    </div>
  );
}

export default Centerbar;
