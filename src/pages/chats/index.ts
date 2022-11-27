import Block from '../../core/block';
import template from './chats.hbs';
import ChatsController from '../../controllers/chats';
import withStore from '../../core/withStore';
import MessengerController from '../../controllers/messenger';
import AuthController from '../../controllers/auth';

export interface StateData {
 user:{
  avatar: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
 };
  messages:[{
  content: string;
  time: string;
  user_id: boolean;
  }
  ];

  chats:[{
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: number | null;
  title: string;
  unread_count: number;
  }
  ]
}

export class ChatsBase extends Block {
  scroll: number;

  constructor(data: StateData) {
    super({
      ...data,
      events: {
        click: (e: MouseEvent) => {
          const element = e.target as any;
          if (element?.type === 'button' && element?.name === 'delete_user') {
            MessengerController.deleteUser(element.id);
          }
        },
        submit: (e: MouseEvent) => {
          e.preventDefault();
          const element = e.target as any;

          if (element?.name === 'add_user') {
            const input = document.querySelector('.add_user__input') as HTMLInputElement;
            const tooltips = document.getElementsByClassName('tooltip');
            const errors:Array<string> = [];
            Array.from(tooltips).forEach((tooltip: any) => {
              if (tooltip.dataset.name === 'login') {
                errors.push(tooltip.dataset.error);
              }
            });
            if (errors.includes('false')) {
              throw new Error('Логин пользователя введен неправильно');
            }
            MessengerController.addUser(input?.value);
          }

          if (element?.name === 'add_chat') {
            const input = document.querySelector('.add_chat__input') as HTMLInputElement;
            const tooltips = document.getElementsByClassName('tooltip');
            const errors:Array<string> = [];
            Array.from(tooltips).forEach((tooltip: any) => {
              if (tooltip.dataset.name === 'chat_name') {
                errors.push(tooltip.dataset.error);
              }
            });
            if (errors.includes('false')) {
              throw new Error('Введите название чата');
            }
            ChatsController.addChat(input?.value);
          }

          if (element?.name === 'message') {
            const input = document.querySelector('.message__input') as HTMLInputElement;
            const tooltips = document.getElementsByClassName('tooltip');
            const errors:Array<string> = [];
            Array.from(tooltips).forEach((tooltip: any) => {
              if (tooltip.dataset.name === 'message') {
                errors.push(tooltip.dataset.error);
              }
            });
            if (errors.includes('false')) {
              throw new Error('Невозможно отправить пустое сообщение');
            }

            const message: Record<string, string> = {};
            message.type = input.name;
            message.content = input.value;
            MessengerController.sendMessage(JSON.stringify(message));
          }
        },
      },
    });
  }

  _init() {
    AuthController.getUser();
    ChatsController.getChats();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
const withUser = withStore((state) => (state));

const Chats = withUser(ChatsBase);

export default Chats;
