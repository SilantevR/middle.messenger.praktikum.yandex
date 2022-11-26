import Block from '../../core/block';
import template from './login.hbs';
import AuthController from '../../controllers/auth';
import withStore from '../../core/withStore';
import { StateData } from '../chats/index';

export class LoginBase extends Block {
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

          const formData: any = {};
          inputs?.forEach((input:HTMLInputElement) => {
            formData[input.name] = input.value;
          });
          AuthController.login(formData);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => (state));

const Login = withUser(LoginBase);

export default Login;
