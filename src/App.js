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



function App() {
  

  const [activeButton, setActiveButton] = useState(null);
  const [button1Styles, setButton1Styles] = useState({
   
  });
  const buttons = [
    { id: 1, icon: <BiText /> },
    
  ];
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
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
        <div className="h-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 grid grid-cols-4 gap-4" >
         <button><FaBold/></button>
         <button><FaUnderline/></button>
         <button><BiItalic/></button>
         <button><  RiOverline/></button>
       
        </div>
      )}

      {activeButton === 2 && (
        <div>
          <label>
            Background Color:
            <input
              type="text"
           
             
            />
          </label>
          <label>
            Text Size:
            <input
              type="text"
            
             
            />
          </label>
          </div>
 )}
          </div>
  </div>
  
       
  <div className='flex'>
      <Leftnav/>
     <Centerbar/>
     <Rightnav   
      />
     
     </div>
     
</div>
    
  );
}

export default App;
