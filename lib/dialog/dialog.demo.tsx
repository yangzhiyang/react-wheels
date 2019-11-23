import React from "react";
import DialogExample from "./dialog.example";
import Demo from "../demo";

const IconDemo = () => {
  return (
    <Demo code={require("!!raw-loader!./dialog.example.tsx").default}>
      <DialogExample />
    </Demo>
  );
};

export default IconDemo;
