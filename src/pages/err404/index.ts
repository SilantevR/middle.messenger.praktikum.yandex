import Block from '../../core/block';
import template from './err404.hbs';
import withStore from '../../core/withStore';

export class Page404Base extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
const withUser = withStore((state) => (state));

const Page404 = withUser(Page404Base);

export default Page404;
