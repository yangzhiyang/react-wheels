import React, { ReactFragment } from "react";

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
      {props.fields.map(field => (
        <div key={field.name}>
          {field.label}
          <input
            value={props.value[field.name]}
            type={field.input.type}
            onChange={e => onChange(field.name, e.target.value)}
          />
        </div>
      ))}
      {props.buttons}
    </form>
  );
};

export default Form;
