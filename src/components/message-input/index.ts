import Handlebars from 'handlebars';
import Block from '../../core/block';
import validation from '../../core/validation';
import template from './message-input';

interface MessageProps {
  page: string;
  type: string;
  name: string;
  value: string;
  text: string;
  required: string
}

export default class MessageInput extends Block {
  static helper = 'MessageInput';

  constructor(props: MessageProps) {
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
