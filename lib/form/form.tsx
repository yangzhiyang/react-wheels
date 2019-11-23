import React, { ReactFragment } from "react";

import Input from "../input/input";
import "./form.scss";

interface FormValue {
  [k: string]: any;
}
export { FormValue };
interface FormProps {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [key: string]: Array<string> };
}
const Form: React.FunctionComponent<FormProps> = props => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onChange = (name: string, value: string) => {
    const formData = {
      ...props.value,
      [name]: value
    };
    props.onChange(formData);
  };
  return (
    <form onSubmit={onSubmit}>
      <table className="wheels-form-table">
        <tbody>
          {props.fields.map(field => (
            <tr key={field.name} className="wheels-form-tr">
              <td className="wheels-form-td">
                <span className="wheels-form-label">{field.label}</span>
              </td>
              <td className="wheels-form-td">
                <Input
                  className="wheels-form-input"
                  value={props.value[field.name]}
                  type={field.input.type}
                  onChange={e => onChange(field.name, e.target.value)}
                />
                <div className="wheels-form-error">
                  {props.errors[field.name] ? (
                    props.errors[field.name].join("，")
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          <tr className="wheels-form-tr">
            <td className="wheels-form-td" />
            <td className="wheels-form-td">{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
