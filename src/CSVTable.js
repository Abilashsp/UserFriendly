import React, { useRef,useEffect } from 'react';
import Papa from 'papaparse';

function CSVTable({ csvData, setCsvData, setactivebutton }) {
  const fileInputRef = useRef(null);
  useEffect(() => {
    openFileInput();
  }, []);

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
    });
    setactivebutton(null)
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleCSVUpload}
        style={{ display: 'none' }}
      />
  
    </div>
  );
}

export default CSVTable;
