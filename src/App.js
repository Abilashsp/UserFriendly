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
import {
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignLeft,
  CiTextAlignJustify,
} from "react-icons/ci";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const [InputValue, setInputValue] = useState("");
  const [centerbarValues, setCenterbarValues] = useState([
    {
      value: "",
      bold: false,
      underLine: false,
      italics: false,
      straightthrough: false,
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
    { id: "Strightthroughline", icon: <AiOutlineStrikethrough/> },
  ];

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
        { value: InputValue },
      ]);
      setInputValue("");
    }
  };

  const BoldButtons = () => {
    setCenterbarValues((prevValues) =>
      prevValues.map((item, index) =>
        index === textid ? { ...item, bold: !item.bold } : item
      )
    );
  };

  const UnderlineButtons = () => {
    setCenterbarValues((prevValues) =>
      prevValues.map((item, index) =>
        index === textid ? { ...item, underLine: !item.underLine } : item
      )
    );
  };

  const italicButtons = () => {
    setCenterbarValues((prevValues) =>
      prevValues.map((item, index) =>
        index === textid ? { ...item, italics: !item.italics } : item
      )
    );
  };

  const straightthroghButtons = () => {
    setCenterbarValues((prevValues) =>
      prevValues.map((item, index) =>
        index === textid
          ? { ...item, straightthrough: !item.straightthrough }
          : item
      )
    );
  };

  const handleButtons = (buttonId) => {
    if (textid !== null) {
      if (buttonId === "bold") {
        BoldButtons();
      } else if (buttonId === "underline") {
        UnderlineButtons();
      } else if (buttonId === "italic") {
        italicButtons();
      } else if (buttonId === "Strightthroughline") {
        straightthroghButtons();
      }
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
            <div className="h-full   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 grid grid-cols-4  ">
              <div className="flex border-2">
                {text.map((button) => (
                  <button
                    key={button.id}
                    className="border-2"
                    onClick={() => handleButtons(button.id)}
                  >
                    {button.icon}
                  </button>
                ))}
              </div>

              <div className="flex px-1">
                <button className="border-2">
                  <CiTextAlignCenter />
                </button>
                <button className="border-2">
                  <CiTextAlignLeft />
                </button>
                <button className="border-2">
                  <CiTextAlignRight />
                </button>
                <button className="border-2">
                  <CiTextAlignJustify />
                </button>
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
