import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './settings';
import UserController from '../../controllers/user';
import AuthController from '../../controllers/auth';
import withStore from '../../core/withStore';
import { StateData } from '../chats/index';

export class SettingsBase extends Block {
  constructor(data: StateData) {
    super({
      ...data.user,
      events: {
        submit: (e: MouseEvent) => {
          e.preventDefault();
          const element = e.target as HTMLFormElement;
          const tooltips = document.getElementsByClassName('tooltip');
          const errors:Array<string> = [];
          Array.from(tooltips).forEach((tooltip: any) => {
            errors.push(tooltip.dataset.error);
          });
          const passwordErrors = errors.slice(-2);
          errors.splice(-2, 2);
          if (element.name === 'settings') {
            const form = document.querySelector('.form_settings');
            const inputs = form?.querySelectorAll('input');
            if (errors.includes('false')) {
              throw new Error('Поля формы данных заполнены неправильно');
            }
            const formData: any = {};
            inputs?.forEach((input:HTMLInputElement) => {
              formData[input.name] = input.value;
            });
            UserController.update(formData);
          }
          if (element.name === 'password') {
            const form = document.querySelector('.form_password');
            const inputs = form?.querySelectorAll('input');
            if (passwordErrors.includes('false')) {
              throw new Error('Пароль введен неправильно');
            }
            const formData: any = {};
            inputs?.forEach((input:HTMLInputElement) => {
              formData[input.name] = input.value;
            });
            UserController.changePassword(formData);
          }
        },
        click: (e: MouseEvent) => {
          const element = e.target as HTMLButtonElement;
          if (element?.type === 'reset') {
            AuthController.logout();
          }
        },

      },
    });
  }

  _init() {
    AuthController.getUser();
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}

const withUser = withStore((state) => (state));

const Settings = withUser(SettingsBase);

export default Settings;
