import Handlebars from 'handlebars';
import Block from '../../core/block';
import validation from '../../core/validation';
import template from './settingsLabel';
import { LabelProps } from '../label/index';

export default class SettingsLabel extends Block {
  static helper = 'SettingsLabel';

  constructor(props: LabelProps) {
    super({
      ...props,
      events: {
        focus: (e: FocusEvent) => {
          e.preventDefault();
          const element = e.target as HTMLInputElement;
          this.refs[element.name].setProps(validation(element.name, element.value));
        },
        change: (e: FocusEvent) => {
          e.preventDefault();
          const element = e.target as HTMLInputElement;
          this.refs[element.name].setProps(validation(element.name, element.value));
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
