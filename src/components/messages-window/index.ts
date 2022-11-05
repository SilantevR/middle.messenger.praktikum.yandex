import Block from '../../core/block';
import template from './messages-window.hbs';
import { messages } from '../../data/messages';

export default class MessagesWindow extends Block {
  static helper = 'MessagesWindow';

  constructor() {
    super({ messages });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
