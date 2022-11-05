import Block from '../../core/block';
import template from './link.hbs';

export default class Link extends Block {
  static helper = 'Link';

  protected render() {
    return this.compile(template, this.props);
  }
}
