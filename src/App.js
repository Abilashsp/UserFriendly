import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Leftnav from "./Leftnav";
import Centerbar from "./Centerbar";
import Rightnav from "./Rightnav";
import Icons from "./Icons";
import { FaBold, FaUnderline } from "react-icons/fa";
import { BiItalic, BiText } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { BiFontColor } from "react-icons/bi";
import { MdFontDownload } from "react-icons/md";
import { useMemo } from "react";
import uuid4 from "uuid4";
import {
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignLeft,
  CiTextAlignJustify,
} from "react-icons/ci";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import _ from "lodash";

function App() {
  const id=uuid4();
  const [img,setimg]=useState([]);
  const [InputValue, setInputValue] = useState("");
  const [centerbarValues, setCenterbarValues] = useState([
    {
      id: id,
      value: "",
      textStyle: [],
      textalign: "",
      textColor: "",
      text: "",
      textBgColor: "",
      image:[],
    },
  ]);
  const [activeButton, setActiveButton] = useState(null);
  const buttons = useSelector((state) => state.buttons);
  const [textbuttons, settextbuttons] = useState(false);
  const [textid, settextid] = useState(null);

  const text = [
    { id: "bold", icon: <FaBold />, class: "font-bold" },
    { id: "underline", icon: <FaUnderline />, class: "underline" },
    { id: "italic", icon: <BiItalic />, class: "italic" },
    {
      id: "Strightthroughline",
      icon: <AiOutlineStrikethrough />,
      class: "line-through",
    },
  ];

  const textalign = [
    { id: "text-align-center", icon: <CiTextAlignCenter />, class: "text-center" },
    { id: "text-align-left", icon: <CiTextAlignLeft />, class: "text-left" },
    { id: "text-align-right", icon: <CiTextAlignRight />, class: "text-right" },
    { id: "text-align-justify", icon: <CiTextAlignJustify />, class: "text-justify" },
  ];

  const textcolor = [
    { id: "text-color-black", icon: <BiFontColor />, color: "text-slate-900", iconcolor: "black" },
    { id: "text-color-violet", icon: <BiFontColor />, color: "text-violet-900", iconcolor: "violet" },
    { id: "text-color-blue", icon: <BiFontColor />, color: "text-blue-900", iconcolor: "blue" },
    { id: "text-color-green", icon: <BiFontColor />, color: "text-green-900", iconcolor: "green" },
    { id: "text-color-red", icon: <BiFontColor />, color: "text-red-900", iconcolor: "red" },
    { id: "text-color-brown", icon: <BiFontColor />, color: "text-amber-900", iconcolor: "brown" },
    { id: "text-color-orange", icon: <BiFontColor />, color: "text-orange-900", iconcolor: "orange" },
    { id: "text-color-gray", icon: <BiFontColor />, color: "text-gray-900", iconcolor: "gray" },
  ];


  const textbackgroundcolor = [
    { id: "text-bg-pink", icon: <MdFontDownload />, color: "bg-pink-400", iconcolor: "pink" },
    { id: "text-bg-yellow", icon: <MdFontDownload />, color: "bg-yellow-400", iconcolor: "yellow" },
    { id: "text-bg-LightBlue", icon: <MdFontDownload />, color: "bg-blue-200", iconcolor: "lightblue" },
    { id: "text-bg-black", icon: <MdFontDownload />, color: "bg-slate-950", iconcolor: "black" },
    { id: "text-bg-violet", icon: <MdFontDownload />, color: "bg-violet-500", iconcolor: "violet" },
    { id: "text-bg-blue", icon: <MdFontDownload />, color: "bg-blue-900", iconcolor: "blue" },
    { id: "text-bg-green", icon: <MdFontDownload />, color: "bg-green-900", iconcolor: "green" },
    { id: "text-bg-red", icon: <MdFontDownload />, color: "bg-red-700", iconcolor: "red" },
    { id: "text-bg-brown", icon: <MdFontDownload />, color: "bg-amber-900", iconcolor: "brown" },
    { id: "text-bg-orange", icon: <MdFontDownload />, color: "bg-orange-600", iconcolor: "orange" },
    { id: "text-bg-Indigo", icon: <MdFontDownload />, color: "bg-indigo-950", iconcolor: "indigo" },
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleFileSelected = (event) => {
    // Handle the selected files here
    const selectedFiles = event.target.files;
    setimg([...selectedFiles]);
  };



  const handelTextButton = (id) => {
    settextbuttons(!textbuttons);
    settextid(id);
  };

 const generateid=useMemo(()=>id,[id])
  

  const handleEnter = () => {
    if (InputValue.trim() !== "") {
      setCenterbarValues((prevValues) => [
        ...prevValues,
        { value: InputValue, id: generateid, image:img},
      ]);
      setInputValue("");
    
    }
  };

  const handleButtons = (buttonId) => {
    if (textid !== null) {
      setCenterbarValues((prevValues) =>
        prevValues.map((item, index) => {
          if (item.id === textid) {
            const _textColor = _.find(textcolor, { id: buttonId });
            const _textBgColor = _.find(textbackgroundcolor, { id: buttonId });
            const _text = _.find(text, { id: buttonId });
            const _textalign = _.find(textalign, { id: buttonId });

            

            if (_textColor) item.textColor = _textColor.color;
            if (_textBgColor) item.textBgColor = _textBgColor.color;

            if (_textalign) {
              item.textalign = _textalign.class;
            }

            if (_text) {
              // init Text style array.
              if (!item.textStyle) item.textStyle = [];

              // Check if its already exist.
              if (item.textStyle?.includes(_text.class)) {
                //Remove style
                item.textStyle = item.textStyle?.filter(
                  (val) => val !== _text.class
                );
              } else {
                // Add style
                item.textStyle.push(_text.class);
              }
            }
           


           

          }

          return item;
        })
      );
    }
  };

  return (
    <div className="App ">
      <div className="flex w-full mt-4 border-4 h-28 ">
        <Icons
          buttons={buttons}
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <div>
          {textid && (
            <div className="grid h-full grid-cols-3 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex items-center">
                {text.map((button) => (
                  <button
                    key={button.id}
                    className="w-2/5 h-6 border-2 rounded-lg "
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>

              <div className="flex items-center px-1">
                {textalign.map((button) => (
                  <button
                    key={button.id}
                    className="w-2/5 h-6 border-2 rounded-lg "
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>
              <div className="flex items-center">
                {textcolor.map((button) => (
                  <button
                    key={button.id}
                    className="w-3/5 h-6 text-2xl border-2 rounded-lg "
                    style={{ color: button.iconcolor }}
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>

              <div className="flex items-center ">
                {textbackgroundcolor.map((button) => (
                  <button
                    key={button.id}
                    className="ml-1 text-2xl border-2 rounded-lg w-/5"
                    style={{ color: button.iconcolor }}
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        <Leftnav />
        <Centerbar
          values={centerbarValues}
          textbuttons={textbuttons}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          handelTextButton={handelTextButton}
          handleFileSelected ={handleFileSelected }
        />
        <Rightnav
          buttons={buttons}
          activeButton={activeButton}
          setActiveButton={handleButtonClick}
          InputValue={InputValue}
          setInputValue={setInputValue}
          handleEnter={handleEnter}
        />
      </div>
    </div>
  );
}

export default App;
