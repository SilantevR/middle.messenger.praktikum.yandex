/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const inputs: any = {
  first_name: validateName,
  second_name: validateName,
  login: validateLogin,
  email: validateEmail,
  phone: validatePhone,
  password: validatePassword,
};

interface validationResult {
  required: string,
  text: string
}

export default function validation(name:string, value:string): validationResult {
  if (!value) {
    return {
      required: 'false',
      text: 'Поле не должно быть пустым',
    };
  }
  if (Object.keys(inputs).includes(name)) {
    return inputs[name](value);
  }

  return { required: 'true', text: '' };
}

function validateName(value: string) {
  if (/^[A-Za-zА-Яа-я-]{0,20}$/i.test(value)) {
    return { required: 'true', text: '' };
  }
  return { required: 'false', text: 'Можно вводить только буквы, первая заглавная, не допускаются цифры и спец. символы' };
}

function validateLogin(value: string) {
  if (/^(?=[\S]+)(?=.*[^0-9 ].*)[a-zA-Z0-9_-]{3,20}$/.test(value)) {
    return { required: 'true', text: '' };
  }
  return { required: 'false', text: 'Только буквы и цифры, первая заглавная, не допускаются цифры и спец. символы' };
}

function validatePassword(value: string) {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/i.test(value)) {
    return { required: 'true', text: '' };
  }
  return { required: 'false', text: 'от 8 до 40 символов, обязательно одна заглавная буква или цифра' };
}

function validateEmail(value: string) {
  if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value)) {
    return { required: 'true', text: '' };
  }
  return { required: 'false', text: 'Email указан неверно' };
}

function validatePhone(value: string) {
  if (/(?:\+|\d)[\d\-() ]{9,}\d/g.test(value)) {
    return { required: 'true', text: '' };
  }
  return { required: 'false', text: 'Телефон указан неверно' };
}
