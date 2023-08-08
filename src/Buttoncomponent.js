import React, { useState } from 'react';
import Icons from './Icons';

function Buttoncomponent() {
  
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },

  ];
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div> <Icons
    buttons={buttons}
    activeButton={activeButton}
    setActiveButton={handleButtonClick}
  /></div>
  )
}

export default Buttoncomponent