import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './err404';
import withStore from '../../core/withStore';

export class Page404Base extends Block {
  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
const withUser = withStore((state) => (state));

const Page404 = withUser(Page404Base);

export default Page404;
