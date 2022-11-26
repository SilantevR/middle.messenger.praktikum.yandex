import Block from '../../core/block';
import template from './err500.hbs';
import withStore from '../../core/withStore';

export class Page500Base extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => (state));

const Page500 = withUser(Page500Base);

export default Page500;
