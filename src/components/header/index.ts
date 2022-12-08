import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './header';
import router from '../../core/router';
import logo from '../../../static/logo.png';

export default class Header extends Block {
  static helper = 'Header';

  constructor() {
    super({
      logo,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          const link = e.target as any;
          if (link.pathname) {
            router.go(link.pathname);
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
