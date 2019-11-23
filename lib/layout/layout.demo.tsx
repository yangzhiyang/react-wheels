import React from "react";
import LayoutExample1 from "./layout.example.1";
import LayoutExample2 from "./layout.example.2";
import LayoutExample3 from "./layout.example.3";

import Demo from "../demo";

const IconDemo = () => {
  return (
    <>
      <Demo code={require("!!raw-loader!./layout.example.1.tsx").default}>
        <LayoutExample1 />
      </Demo>
      <Demo code={require("!!raw-loader!./layout.example.2.tsx").default}>
        <LayoutExample2 />
      </Demo>
      <Demo code={require("!!raw-loader!./layout.example.3.tsx").default}>
        <LayoutExample3 />
      </Demo>
    </>
  );
};

export default IconDemo;
