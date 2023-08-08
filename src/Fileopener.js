import React, { useEffect, useRef, useState } from 'react';
// In Fileopener component
function Fileopener({ activeButton, setCenterbarValues ,img, textid, setactivebutton}) {
  const fileInputRef = useRef(null);

  useEffect(() => {
    fileInputRef.current.click();
  }, []);

  const handleFileSelected = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files);

    const imageItem = {
      imagevalue: newImages[0],
    };

    setCenterbarValues((prevValues) => [...prevValues, imageItem]);
    setactivebutton(null)
    
  };
  
  return (
    <div className="h-96 w-4/5">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelected}
        multiple // Enable multiple file selection
      />

      {/* Render multiple images */}
    
    </div>
  );
}

export default Fileopener;

