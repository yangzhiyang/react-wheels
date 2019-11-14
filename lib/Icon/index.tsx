import React from "react";
import classes from "../helpers/classes";
import "./importIcons";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classes("wheels-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
