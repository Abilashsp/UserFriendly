import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Leftnav from './Leftnav';
import Centerbar from './Centerbar';
import Rightnav from './Rightnav';
import Icons from './Icons';
import {FaBold,FaUnderline } from 'react-icons/fa';
import {BiItalic,BiText } from 'react-icons/bi';
import {RiOverline } from 'react-icons/ri';
import {CiTextAlignCenter,CiTextAlignRight,CiTextAlignLeft,CiTextAlignJustify } from 'react-icons/ci';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';



function App() {
  
  const [InputValue, setInputValue] = useState('');
  const [centerbarValues, setCenterbarValues] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const buttons= useSelector(state=>state.buttons)

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

 
  const handleEnter = () => {
    if (InputValue.trim() !== '') {
      setCenterbarValues(prevValues => [...prevValues, InputValue]);
      setInputValue('');
    }
 
  };






  return (
    <div className="App ">
      <div className='h-28 w-full mt-4 border-4 flex '><Icons
     buttons={buttons}
    activeButton={activeButton}
    setActiveButton={handleButtonClick} 
  /> 
  <div>
  {activeButton === 1 && (
        <div className="h-full   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 grid grid-cols-4  " >
        <div className='flex border-2 '>
         <button  className='border-2'><FaBold/></button>
         <button   className='border-2'><FaUnderline/></button>    
         <button  className='border-2'><BiItalic/></button>
         <button  className='border-2'><  RiOverline/></button>
         </div>
         <div className='flex px-1'>
          <button  className='border-2'><  CiTextAlignCenter/></button>
          <button  className='border-2'>< CiTextAlignLeft /></button>
          <button  className='border-2'>< CiTextAlignRight/></button> 
          <button  className='border-2'>< CiTextAlignJustify/></button>  
          </div>




        </div>
      )}

      {activeButton === 2 && (
        <div>
          
          </div>
 )}
          </div>
  </div>
  
       
  <div className='flex'>
      <Leftnav/>
     <Centerbar values={centerbarValues}/>
     <Rightnav   buttons={buttons}
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
