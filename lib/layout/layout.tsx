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
    childrenAsArrayReactElement.length &&
    childrenAsArrayReactElement.some(child => child.type === Aside);
  return (
    <div
      className={sc("", {
        extra: [className, hasAside && "hasAside"].join(" ")
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Layout;
