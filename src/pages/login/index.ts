import Block from '../../core/block';
import template from './login.hbs';

export default class Login extends Block {
  constructor() {
    super({
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

          const formData: { name: string; value: string }[] = [];
          inputs?.forEach((input) => {
            formData.push({ name: input.name, value: input.value });
          });
          console.log(formData);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
