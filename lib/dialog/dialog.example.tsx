import React, { useState } from "react";
import Dialog from "./dialog";

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>点我</button>
      <Dialog visible={visible}>
        <div>hi</div>
      </Dialog>
    </div>
  );
}
