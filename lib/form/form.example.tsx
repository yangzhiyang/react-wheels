import React, { useState } from "react";

import Button from "../button/button";
import { FormValue } from "./form";
import Form from "./form";
import Validator from "./validator";

const FormExample: React.FunctionComponent = props => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: ""
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } }
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      { key: "username", minLength: 6, maxLength: 12 },
      { key: "username", pattern: /^[A-Za-z0-9]+$/ },
      { key: "password", required: true }
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
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
      errors={errors}
      onSubmit={onSubmit}
      onChange={value => setFormData(value)}
    />
  );
};

export default FormExample;
