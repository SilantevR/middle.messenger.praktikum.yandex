import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './chat-card';
import ChatsController from '../../controllers/chats';
import Messenger from '../../controllers/messenger';
import defaultImage from '../../../static/default_image.png';

export interface ChatData {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: number | null;
  title: string;
  unread_count: number;
}

export default class ChatCard extends Block {
  static helper = 'ChatCard';

  constructor(data: ChatData) {
    super({
      ...data,
      defaultImage,
      events: {
        click(e: MouseEvent) {
          e.preventDefault();
          const element = e.target as any;
          const chat = e.currentTarget as any;
          if (element.dataset.close === 'true') {
            ChatsController.removeChat(element?.id);
          } else if (chat.dataset.chat === 'true') {
            const currentChat = chat.id;
            Messenger.connect(currentChat);
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
