import React, { useEffect, useRef } from 'react';

function Fileopener({ activeButton ,handleFileSelected }) {

  const fileInputRef = useRef(null);

  
  useEffect(() => {
    if (activeButton === 2) {
      fileInputRef.current.click();
    }
  }, [activeButton]);

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelected}
      
      />


    </div>
  );
}

export default Fileopener;
