import { FormValue } from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}
interface Errors {
  [k: string]: Array<string>;
}
type FormRules = Array<FormRule>;
const Validator = (formData: FormValue, formRules: FormRules): Errors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  formRules.map(rule => {
    const value = formData[rule.key];
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, `${rule.key}不能为空`);
      }
    }
    if (rule.minLength) {
      if (isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, `${rule.key}长度不得小于${rule.minLength}`);
      }
    }
    if (rule.maxLength) {
      if (isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, `${rule.key}长度不得超过${rule.maxLength}`);
      }
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, `${rule.key}格式不正确`);
      }
    }
  });
  return errors;
};

function isEmpty(value: any) {
  return value === undefined || value === null || value === "";
}

export default Validator;
