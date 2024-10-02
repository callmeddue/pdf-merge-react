import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

// Create Document Component
const Content = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="m-4">
      <div
        style={{ display: "none" }} // This make ComponentToPrint show   only while printing
      >
        <ComponentToPrint ref={componentRef} />
      </div>
      <button
        className="border border-slate-700 bg-red-600 text-white p-2 rounded-sm"
        onClick={handlePrint}
      >
        Print PDF 1
      </button>
    </div>
  );
};

export default Content;
