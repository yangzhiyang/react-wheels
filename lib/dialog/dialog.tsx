import React, { Fragment } from "react";

import Icon from "../icon";
import { scopedClassMaker } from "../helpers/classes";

import "./dialog.scss";

interface dialogProps {
  visible: boolean;
}
const scopedClass = scopedClassMaker("wheels-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<dialogProps> = ({
  visible,
  children
}) => {
  return visible ? (
    <Fragment>
      <div className={sc("mask")}></div>
      <div className={sc()}>
        <div className={sc("close")}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{children}</main>
        <footer className={sc("footer")}>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </Fragment>
  ) : null;
};
export default Dialog;
