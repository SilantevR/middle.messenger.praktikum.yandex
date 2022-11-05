import Block from '../../core/block';
import template from './message.hbs';

export default class Message extends Block {
  static helper = 'Message';

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
