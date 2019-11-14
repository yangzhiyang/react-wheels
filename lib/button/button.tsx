import React, { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  primary?: boolean;
}

const Button: FunctionComponent<ButtonProps> = props => (
  <button {...props}>
    {props.content}
    {props.children}
  </button>
);

export default Button;
