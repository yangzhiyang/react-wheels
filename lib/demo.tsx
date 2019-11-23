import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useState } from "react";
import Button from "./button/button";

interface Props {
  code: string;
}

/**
 * [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
 * [](https://webpack.docschina.org/loaders/raw-loader/)
 */

const Demo: React.FunctionComponent<Props> = props => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  return (
    <div style={{ width: 600 }}>
      <div>{props.children}</div>
      <div>
        <Button
          onClick={() => setCodeVisible(!codeVisible)}
          style={{ marginTop: 8 }}
        >
          {codeVisible ? "收起代码" : "查看代码"}
        </Button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;
