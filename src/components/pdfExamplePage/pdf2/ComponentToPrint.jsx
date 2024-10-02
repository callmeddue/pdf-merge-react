import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="m-4">
      <div className="text-3xl font-extrabold">PDF 2</div>
    </div>
  );
});
