import Block from '../../core/block';
import template from './messages-window.hbs';
import withStore from '../../core/withStore';
import { StateData } from '../../pages/chats';

export class MessagesWindowBase extends Block {
  static helper = 'MessagesWindow';

  constructor(data: StateData) {
    super({ data });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const withMessage = withStore((state) => (state));

const MessagesWindow = withMessage(MessagesWindowBase);

export default MessagesWindow;
