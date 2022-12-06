import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './tooltip';

export default class Tooltip extends Block {
  static helper = 'Tooltip';

  protected render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
