import React, { HTMLAttributes } from "react";

import { scopedClassMaker } from "../helpers/classes";

const sc = scopedClassMaker("wheels-layout");

interface Props extends HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={sc("footer", { extra: className })} {...restProps}>
      {children}
    </div>
  );
};

export default Footer;
