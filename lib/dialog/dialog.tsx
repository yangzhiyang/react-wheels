import React, { Fragment, ReactElement, MouseEventHandler } from "react";

import Icon from "../icon";
import { scopedClassMaker } from "../helpers/classes";

import "./dialog.scss";

interface dialogProps {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: MouseEventHandler;
  closeOnClickMask?: boolean;
}
const scopedClass = scopedClassMaker("wheels-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<dialogProps> = ({
  visible,
  children,
  buttons,
  onClose,
  closeOnClickMask
}) => {
  const onClickClose: MouseEventHandler = e => {
    onClose(e);
  };
  const onClickMask: MouseEventHandler = e => {
    if (closeOnClickMask) {
      onClose(e);
    }
  };
  return visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{children}</main>
        <footer className={sc("footer")}>
          {buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </Fragment>
  ) : null;
};
Dialog.defaultProps = {
  closeOnClickMask: false
};
export default Dialog;
