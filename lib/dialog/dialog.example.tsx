import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import Button from "../button/button";

export default function() {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <Button onClick={() => close()}>close</Button>
      </h1>
    );
  };
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>点我</Button>
      <Button onClick={() => alert("hi")}>点我展示alert</Button>
      <Button onClick={() => confirm("hi")}>点我展示confirm</Button>
      <Button onClick={openModal}>点我展示modal</Button>
      <Dialog
        visible={visible}
        buttons={[
          <Button onClick={() => setVisible(false)}>1</Button>,
          <Button onClick={() => setVisible(false)}>2</Button>
        ]}
        onClose={() => setVisible(false)}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
}
