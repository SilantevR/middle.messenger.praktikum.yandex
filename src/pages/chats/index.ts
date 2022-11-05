import Block from '../../core/block';
import template from './chats.hbs';

export default class Chats extends Block {
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
            throw new Error('Невозможно отправить пустое сообщение');
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
