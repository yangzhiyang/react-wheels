import React, { Fragment, ReactElement, MouseEventHandler } from "react";
import ReactDom from "react-dom";

import Icon from "../icon";
import { scopedClassMaker } from "../helpers/classes";

import "./dialog.scss";

interface dialogProps {
  visible: boolean;
  buttons?: Array<ReactElement>;
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
  const dialog = visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{children}</main>
        <footer className={sc("footer")}>
          {buttons &&
            buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
        </footer>
      </div>
    </Fragment>
  ) : null;
  return ReactDom.createPortal(dialog, document.body);
};
Dialog.defaultProps = {
  closeOnClickMask: false
};

const alert = (content: string) => {
  const div = document.createElement("div");
  document.body.append(div);
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        ReactDom.render(React.cloneElement(component, { visible: false }), div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  ReactDom.render(component, div);
};

const confirm = (content: string, ok?: () => void, cancel?: () => void) => {
  const div = document.createElement("div");
  document.body.append(div);

  const onOk = () => {
    ReactDom.render(React.cloneElement(component, { visible: false }), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
    ok && ok();
  };
  const onCancel = () => {
    ReactDom.render(React.cloneElement(component, { visible: false }), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
    cancel && cancel();
  };
  const component = (
    <Dialog
      visible={true}
      onClose={onCancel}
      buttons={[
        <button onClick={onOk}>ok</button>,
        <button onClick={onCancel}>cancel</button>
      ]}
    >
      {content}
    </Dialog>
  );
  ReactDom.render(component, div);
};

export { alert, confirm };
export default Dialog;
