import Block from '../../core/block';
import template from './chat.hbs';
import withStore from '../../core/withStore';
import { StateData } from '../../pages/chats';

export class ChatBase extends Block {
  static helper = 'Chat';

  constructor(data: StateData) {
    super({ data });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
const withChats = withStore((state) => (state));

const Chat = withChats(ChatBase);

export default Chat;
