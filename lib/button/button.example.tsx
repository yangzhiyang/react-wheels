import React from "react";
import Button from "./button";

export default () => (
  <>
    <Button buttonType="normal" style={{ marginRight: 8 }}>
      normal
    </Button>
    <Button buttonType="important" style={{ marginRight: 8 }}>
      button
    </Button>
    <Button buttonType="danger">button</Button>
  </>
);
