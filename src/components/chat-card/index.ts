import Block from '../../core/block';
import template from './chat-card.hbs';

export default class ChatCard extends Block {
  static helper = 'ChatCard';

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
