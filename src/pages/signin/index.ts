import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './signin';
import AuthController from '../../controllers/auth';
import withStore from '../../core/withStore';
import { StateData } from '../chats/index';

export class SigninBase extends Block {
  constructor(data: StateData) {
    super({
      ...data.user,
      events: {
        submit: (e: MouseEvent) => {
          e.preventDefault();
          const form = document.querySelector('form');
          const inputs = form?.querySelectorAll('input');

          const tooltips = document.getElementsByClassName('tooltip');
          const errors:Array<string> = [];
          Array.from(tooltips).forEach((tooltip: any) => {
            errors.push(tooltip.dataset.error);
          });
          if (errors.includes('false')) {
            throw new Error('Поля формы заполнены неправильно');
          }
          if (inputs?.[5] && typeof inputs?.[6] && form?.name === 'signin') {
            if (inputs[5].value !== inputs[6].value) {
              throw new Error('Пароль не совпадает');
            }
          }

          const formData: any = {};
          inputs?.forEach((input:HTMLInputElement) => {
            formData[input.name] = input.value;
          });
          AuthController.signup(formData);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => (state));

const Signin = withUser(SigninBase);

export default Signin;
