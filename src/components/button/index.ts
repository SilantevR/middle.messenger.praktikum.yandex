import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './button';

export default class Button extends Block {
  static helper = 'Button';

  protected render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
