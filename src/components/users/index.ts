import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './users';

export default class Users extends Block {
  static helper = 'Users';

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
