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
import {
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignLeft,
  CiTextAlignJustify,
} from "react-icons/ci";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function App() {

  const [id, setid] = useState(1);
  const [InputValue, setInputValue] = useState("");
  const [centerbarValues, setCenterbarValues] = useState([
    {
      id: id,
      value: "",
      bold: false,
      underLine: false,
      italics: false,
      straightthrough: false,
      textaligncenter: false,
      textalignright: false,
      textalignleft: false,
      textjustify: false,
      textblack: false,
      textviolet: false,
      textblue: false,
      textgreen: false,
      textred: false,
      textbrown: false,
      textorange: false,
      textgray: false,
      textbgpink: false,
      textbgyellow: false,
      textbgLightblue: false,
      textbgblack: false,
      textbgviolet: false,
      textbgblue: false,
      textbggreen: false,
      textbgred: false,
      textbgbrown: false,
      textbgorange: false,
      textbgindigo: false,


    },
  ]);
  const [activeButton, setActiveButton] = useState(null);
  const buttons = useSelector((state) => state.buttons);
  const [textbuttons, settextbuttons] = useState(false);
  const [textid, settextid] = useState(null);

  const text = [
    { id: "bold", icon: <FaBold /> },
    { id: "underline", icon: <FaUnderline /> },
    { id: "italic", icon: <BiItalic /> },
    { id: "Strightthroughline", icon: <AiOutlineStrikethrough /> },
  ];

  const textalign = [
    { id: "text-align-center", icon: <CiTextAlignCenter /> },
    { id: "text-align-left", icon: <CiTextAlignLeft /> },
    { id: "text-align-right", icon: <CiTextAlignRight /> },
    { id: "text-align-justify", icon: <CiTextAlignJustify /> },
  ];


  const textcolor = [
    { id: "text-color-black", icon: <BiFontColor />, color: "black" },
    { id: "text-color-violet", icon: <BiFontColor />, color: "violet" },
    { id: "text-color-blue", icon: <BiFontColor />, color: "blue" },
    { id: "text-color-green", icon: <BiFontColor />, color: "green" },
    { id: "text-color-red", icon: <BiFontColor />, color: "red" },
    { id: "text-color-brown", icon: <BiFontColor />, color: "brown" },
    { id: "text-color-orange", icon: <BiFontColor />, color: "orange" },
    { id: "text-color-gray", icon: <BiFontColor />, color: "gray" },


  ]

  const textbackgroundcolor = [
    { id: "text-bg-pink", icon: <MdFontDownload />, color: "pink" },
    { id: "text-bg-yellow", icon: <MdFontDownload />, color: "yellow" },
    { id: "text-bg-LightBlue", icon: <MdFontDownload />, color: "LightBlue" },
    { id: "text-bg-black", icon: <MdFontDownload />, color: "black" },
    { id: "text-bg-violet", icon: <MdFontDownload />, color: "violet" },
    { id: "text-bg-blue", icon: <MdFontDownload />, color: "blue" },
    { id: "text-bg-green", icon: <MdFontDownload />, color: "green" },
    { id: "text-bg-red", icon: <MdFontDownload />, color: "red" },
    { id: "text-bg-brown", icon: <MdFontDownload />, color: "brown" },
    { id: "text-bg-orange", icon: <MdFontDownload />, color: "orange" },
    { id: "text-bg-Indigo", icon: <MdFontDownload />, color: "Indigo" },


  ]



  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const handelTextButton = (id) => {
    settextbuttons(!textbuttons);
    settextid(id);
  };

  const handleEnter = () => {
    if (InputValue.trim() !== "") {
      setCenterbarValues((prevValues) => [
        ...prevValues,
        { value: InputValue, id: id },
      ]);
      setInputValue("");
      setid((id) => id + 1);
    }
  };


  const handleButtons = (buttonId) => {
    if (textid !== null) {
      setCenterbarValues((prevValues) =>
        prevValues.map((item, index) => {
          if (item.id === textid) {
            switch (buttonId) {
              case "bold":
                return { ...item, bold: !item.bold };
              case "underline":
                return { ...item, underLine: !item.underLine };
              case "italic":
                return { ...item, italics: !item.italics };
              case "Strightthroughline":
                return { ...item, straightthrough: !item.straightthrough };
              case "text-align-center":
                return { ...item, textaligncenter: !item.textaligncenter };
              case "text-align-left":
                return { ...item, textalignright: !item.textalignright };
              case "text-align-right":
                return { ...item, textalignleft: !item.textalignleft };
              case "text-align-justify":
                return { ...item, textjustify: !item.textjustify };

                //textcolor

              case "text-color-black":
                return { ...item, textblack: !item.textblack };
              case "text-color-violet":
                return { ...item, textviolet: !item.textviolet };
              case "text-color-blue":
                return { ...item, textblue: !item.textblue };
              case "text-color-green":
                return { ...item, textgreen: !item.textgreen };
              case "text-color-red":
                return { ...item, textred: !item.textred };
              case "text-color-brown":
                return { ...item, textbrown: !item.textbrown };
              case "text-color-orange":
                return { ...item, textorange: !item.textorange };
              case "text-color-gray":
                return { ...item, textgray: !item.textgray };


              //bg

              case "text-bg-pink":
                return { ...item, textbgpink: !item.textbgpink };
              case "text-bg-yellow":
                return { ...item,  textbgyellow: !item. textbgyellow };
              case "text-bg-LightBlue":
                return { ...item,textbgLightblue: !item.textbgLightblue };
              case "text-bg-black":
                return { ...item, textbgblack: !item.textbgblack };
              case "text-bg-violet":
                return { ...item, textbgviolet: !item.textbgviolet};
              case "text-bg-blue":
                return { ...item, textbgblue: !item. textbgblue };
              case "text-bg-green":
                return { ...item,textbggreen: !item.textbggreen };
              case "text-bg-red":
                return { ...item, textbgred: !item.textbgred };
              case "text-bg-brown":
                return { ...item, textbgbrown: !item.textbgbrown };
              case "text-bg-orange":
                return { ...item,  textbgorange: !item. textbgorange };
              case "text-bg-Indigo":
                return { ...item, textbgindigo: !item.textbgindigo};
              default:
                return item;
            }
          } else {
            return item;
          }
        })
      );
    }
  };


  return (
    <div className="App ">
      <div className="h-28 w-full mt-4 border-4 flex ">
        <Icons
          buttons={buttons}
          activeButton={activeButton}
          setActiveButton={handleButtonClick}
        />
        <div>
          {textid && (
            <div className="h-full   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 grid grid-cols-3 ">
              <div className="flex items-center">
                {text.map((button) => (
                  <button
                    key={button.id}
                    className="w-2/5 h-6 border-2  rounded-lg "
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>

              <div className="flex px-1 items-center">
                {textalign.map((button) => (
                  <button key={button.id}  className="w-2/5 h-6 border-2  rounded-lg "
                    onClick={() => handleButtons(button.id)}>
                    {button.icon}

                  </button>
                ))}
              </div>
              <div className="flex items-center">
                {textcolor.map((button) => (
                  <button
                    key={button.id}
                    className=" text-2xl rounded-lg w-3/5 h-6 border-2"
                    style={{ color: button.color }}
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
                    className=" text-2xl rounded-lg  w-/5  border-2 ml-1 "
                    style={{ color: button.color }}
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
          setActiveButton={setActiveButton}
          handelTextButton={handelTextButton}
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
