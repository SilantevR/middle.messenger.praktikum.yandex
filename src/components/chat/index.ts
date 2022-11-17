import Block from '../../core/block';
import template from './chat.hbs';
import { data } from '../../data/data';

export default class Chat extends Block {
  static helper = 'Chat';

  constructor() {
    super({
      data,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          console.log(e.target);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
