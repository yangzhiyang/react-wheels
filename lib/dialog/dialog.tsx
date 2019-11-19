import React, {
  Fragment,
  ReactElement,
  MouseEventHandler,
  ReactNode
} from "react";
import ReactDom from "react-dom";

import Icon from "../icon";
import { scopedClassMaker } from "../helpers/classes";

import "./dialog.scss";

interface dialogProps {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: MouseEventHandler;
  closeOnClickMask?: boolean;
  enableMask?: boolean;
}
const scopedClass = scopedClassMaker("wheels-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<dialogProps> = ({
  visible,
  children,
  buttons,
  onClose,
  closeOnClickMask,
  enableMask
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
      {enableMask && <div className={sc("mask")} onClick={onClickMask}></div>}
      <div className={sc()}>
        <div className={sc("close")} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{children}</main>
        {buttons && buttons.length > 0 && (
          <footer className={sc("footer")}>
            {buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;
  return ReactDom.createPortal(dialog, document.body);
};

const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  const div = document.createElement("div");
  document.body.append(div);

  const onClose = () => {
    ReactDom.render(React.cloneElement(component, { visible: false }), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );
  ReactDom.render(component, div);
  return onClose;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>ok</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, ok?: () => void, cancel?: () => void) => {
  const onOk = () => {
    close();
    ok && ok();
  };
  const onCancel = () => {
    close();
    cancel && cancel();
  };
  const buttons = [
    <button onClick={onOk}>ok</button>,
    <button onClick={onCancel}>cancel</button>
  ];
  const close = modal(content, buttons);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
  enableMask: true
};

export { alert, confirm, modal };
export default Dialog;
