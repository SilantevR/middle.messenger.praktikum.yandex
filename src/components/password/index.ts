import Block from '../../core/block';
import template from './password.hbs';

export default class Password extends Block {
  static helper = 'Password';

  protected render() {
    return this.compile(template, this.props);
  }
}
