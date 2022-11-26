import Block from '../../core/block';
import template from './link.hbs';
import router from '../../core/router';

interface LinkProps {
  index: string;
  page: string;
  title: string;
}

export default class Link extends Block {
  static helper = 'Link';

  constructor(props: LinkProps) {
    super({
      ...props,
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

  protected render() {
    return this.compile(template, this.props);
  }
}
