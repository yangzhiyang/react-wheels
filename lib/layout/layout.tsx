import React, { HTMLAttributes, ReactElement } from "react";

import Aside from "./aside";
import { scopedClassMaker } from "../helpers/classes";
import "./layout.scss";

const sc = scopedClassMaker("wheels-layout");

interface Props extends HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = ({
  children,
  className,
  ...restProps
}) => {
  const childrenAsArrayReactElement = children as Array<ReactElement>;
  const hasAside =
    "length" in childrenAsArrayReactElement &&
    childrenAsArrayReactElement.some(child => child.type === Aside);
  return (
    <div
      className={sc({ "": true, hasAside }, { extra: className })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Footer } from "./footer";
export { default as Aside } from "./aside";
