import React, { useState } from "react";
import Dialog, { alert, confirm } from "./dialog";

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>点我</button>
      <button onClick={() => alert("hi")}>点我alert</button>
      <button onClick={() => confirm("hi")}>点我confirm</button>
      <Dialog
        visible={visible}
        buttons={[
          <button onClick={() => setVisible(false)}>1</button>,
          <button onClick={() => setVisible(false)}>2</button>
        ]}
        onClose={() => setVisible(false)}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
}
