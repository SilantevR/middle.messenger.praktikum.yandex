import Block from '../../core/block';
import validation from '../../core/validation';
import template from './label.hbs';

interface LabelProps {
  page: string;
  type: string;
  name: string;
  value: string;
  text: string;
  required: string
}

export default class Label extends Block {
  static helper = 'Label';

  constructor(props: LabelProps) {
    super({
      ...props,
      events: {
        focus: (e: FocusEvent) => {
          e.preventDefault();
          const element = e.target as HTMLInputElement;
          this.refs[element.name].setProps(validation(element.name, element.value));
        },
        blur: (e: FocusEvent) => {
          e.preventDefault();
          const element = e.target as HTMLInputElement;
          this.refs[element.name].setProps(validation(element.name, element.value));
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
