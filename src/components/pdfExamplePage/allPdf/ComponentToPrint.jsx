import React, { useState } from "react";
import "./table.css";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  // const [display, setDisplay] = useState(true);
  return (
    <div ref={ref} className="m-4">
      <div className="text-3xl font-extrabold">PDF 1</div>
      <div className="pagebreak"> </div>
      <div className="text-3xl font-extrabold">PDF 2</div>
    </div>
  );
});
