import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './info';

export default class Info extends Block {
  static helper = 'Info';

  protected render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
