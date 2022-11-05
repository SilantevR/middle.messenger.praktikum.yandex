import Block from '../../core/block';
import template from './header.hbs';

export default class Header extends Block {
  static helper = 'Header';

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
