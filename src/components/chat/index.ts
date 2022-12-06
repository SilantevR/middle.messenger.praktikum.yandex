import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './chat';
import withStore from '../../core/withStore';
import { StateData } from '../../pages/chats';

export class ChatBase extends Block {
  static helper = 'Chat';

  constructor(data: StateData) {
    super({ data });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
const withChats = withStore((state) => (state));

const Chat = withChats(ChatBase);

export default Chat;
