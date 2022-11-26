import Block from '../../core/block';
import template from './users.hbs';

export default class Users extends Block {
  static helper = 'Users';

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
