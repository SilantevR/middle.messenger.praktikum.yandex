import Block from '../../core/block';
import template from './button.hbs';

export default class Button extends Block {
  static helper = 'Button';

  protected render() {
    return this.compile(template, this.props);
  }
}
