import Block from '../../core/block';
import template from './err500.hbs';

export default class Page500 extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
