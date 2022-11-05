import Block from '../../core/block';
import template from './profile.hbs';

export default class Profile extends Block {
  constructor() {
    super({
      events: {
        click: (e: MouseEvent) => {
          console.log(e);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
