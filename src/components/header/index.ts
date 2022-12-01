import Block from '../../core/block';
import template from './header.hbs';
import router from '../../core/router';

export default class Header extends Block {
  static helper = 'Header';

  constructor() {
    super({
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
    return this.compile(template, this.props);
  }
}
