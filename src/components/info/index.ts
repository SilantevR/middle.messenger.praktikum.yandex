import Block from '../../core/block';
import template from './info.hbs';

export default class Info extends Block {
  static helper = 'Info';

  protected render() {
    return this.compile(template, this.props);
  }
}
