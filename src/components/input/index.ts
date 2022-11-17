import Block from '../../core/block';
import template from './input.hbs';

export default class Input extends Block {
  static helper = 'Input';

  protected render() {
    return this.compile(template, this.props);
  }
}
