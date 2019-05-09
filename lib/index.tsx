import React from 'react';
import ReactDom from 'react-dom';
import Icon from './Icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
}

ReactDom.render(
  <div>
    <Icon name="alipay" onClick={fn} onMouseEnter={() => {console.log('enter')}} />
    <Icon name="wechat" onClick={fn} />
    <Icon name="qq" onClick={fn} />
  </div>,
  document.querySelector('#root'));