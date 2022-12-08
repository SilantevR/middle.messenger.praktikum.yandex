import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './input';

export default class Input extends Block {
  static helper = 'Input';

  protected render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
