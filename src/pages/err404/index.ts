import Block from '../../core/block';
import template from './err404.hbs';

export default class Page404 extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
