import React, { useState } from "react";

import Button from "../button/button";
import { FormValue } from "./form";
import Form from "./form";

const FormExample: React.FunctionComponent = props => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: ""
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } }
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={[
        <Button type="submit" key="submit">
          提交
        </Button>,
        <Button key="back">返回</Button>
      ]}
      onSubmit={onSubmit}
      onChange={value => setFormData(value)}
    />
  );
};

export default FormExample;
