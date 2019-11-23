import React from "react";
import FormExample from "./form.example";
import Demo from "../demo";

const IconDemo = () => {
  return (
    <Demo code={require("!!raw-loader!./form.example.tsx").default}>
      <FormExample />
    </Demo>
  );
};

export default IconDemo;
