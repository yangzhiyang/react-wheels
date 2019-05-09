import React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helpers/classNames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, ...restProps } = props;
  return ( 
    <svg 
      className={classes('wheels-icon', className)}
      {...restProps}
    >
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
}

export default Icon;  