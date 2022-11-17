import Block from '../../core/block';
import template from './tooltip.hbs';

export default class Tooltip extends Block {
  static helper = 'Tooltip';

  protected render() {
    return this.compile(template, this.props);
  }
}
