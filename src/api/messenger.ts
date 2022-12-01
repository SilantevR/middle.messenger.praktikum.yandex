import store from '../core/store';
import MessengerController from '../controllers/messenger';

export default class Messenger {
  private socketInst: WebSocket | null = null;

  loadMessages: number;

  loadedMessages: any;

  constructor(userId: number, chatId: number, token: string) {
    const soketUrl = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
    const soket = new WebSocket(soketUrl);

    soket.onmessage = this.onmessage.bind(this);
    soket.onerror = this.error.bind(this);
    soket.onopen = this.onopen.bind(this);
    this.socketInst = soket;
    this.loadMessages = 0;
    this.loadedMessages = [];
  }

  onopen() {
    this.socketInst?.send(JSON.stringify({ type: 'get old', content: '0' }));
  }

  getMessages() {
    this.loadMessages += 20;
    this.socketInst?.send(JSON.stringify({ type: 'get old', content: this.loadMessages }));
  }

  close() {
    this.socketInst?.close();
  }

  error(e: Event) {
    console.log(`Ошибка: ${e}`);
  }

  onmessage(event: MessageEvent) {
    try {
      const messages = JSON.parse(event.data);
      const userId = store.getState().user.id;

      if (Array.isArray(messages)) {
        messages.forEach((message) => {
          message.time = new Date(message.time).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          if (userId === message.user_id) {
            message.user_id = false;
          } else { message.user_id = true; }
          if (message.id > 20) {
            this.loadedMessages.unshift(message);
          }
        });
        if (this.loadedMessages.length > 0 && messages.length > 0) {
          store.set('messages', this.loadedMessages.concat(store.getState().messages));
        } else if (this.loadedMessages.length === 0 && this.loadMessages === 0) {
          store.set('messages', messages.reverse());
        }
      } else if (typeof messages === 'object'
      && !Array.isArray(messages)
      && messages.type === 'message'
      && store.getState().messages) {
        messages.time = new Date(messages.time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        if (userId === messages.user_id) {
          messages.user_id = false;
        } else { messages.user_id = true; }
        if (this.loadedMessages.length === 0) {
          this.loadedMessages = store.getState().messages;
          this.loadedMessages.push(messages);
        } else {
          this.loadedMessages = store.getState().messages;
          this.loadedMessages.push(messages);
        }

        store.set('messages', this.loadedMessages);
        const chatWindow = document.querySelector('.chats__messages__wrapper__window') as any;
        const xH = chatWindow.scrollHeight;
        chatWindow.scrollTo(0, xH);
      }

      if (messages.type !== 'pong' && this.loadMessages === 0) {
        const chatWindow = document.querySelector('.chats__messages__wrapper__window') as any;
        if (chatWindow) {
          const xH = chatWindow.scrollHeight;
          chatWindow.scrollTo(0, xH);
          chatWindow.addEventListener('scroll', () => {
            if (chatWindow.scrollTop === 0) {
              MessengerController.loadOldMessages();
            }
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  send(data:string) {
    this.socketInst?.send(data);
  }
}
