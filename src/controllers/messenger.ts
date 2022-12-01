import Messenger from '../api/messenger';
import store from '../core/store';
import ChatsController from '../controllers/chats';
import UserController from '../controllers/user';

export interface Message {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    }
}

class MessagesController {
  private id: number;

  private socket: Messenger;

  private ping : any = 0;

  users: unknown;

  async connect(id: number) {
    this.id = id;
    clearInterval(this.ping);
    this.ping = 0;
    if (this.socket) {
      this.socket.close();
    }
    const token = await ChatsController.chatToken(id) as any;
    const userId = store.getState().user.id;
    this.users = await ChatsController.getUsers(this.id);
    store.set('users', this.users);
    const messenger = new Messenger(userId, id, token.token);
    this.socket = messenger;
    this.ping = setInterval(() => {
      this.sendMessage(JSON.stringify({ type: 'ping' }));
    }, 5000);
  }

  sendMessage(message: string) {
    if (!this.socket) {
      console.log('Выберите чат');
    }
    try {
      this.socket.send(message);
    } catch (err) {
      console.log(err);
    }
  }

  loadOldMessages() {
    try {
      this.socket.getMessages();
    } catch (err) {
      console.log(err);
    }
  }

  async addUser(login: string) {
    try {
      const userId: any = await UserController.getUserByLogin(login);
      await ChatsController.updateChat(this.id, userId[0].id);
      this.users = await ChatsController.getUsers(this.id);
      store.set('users', this.users);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(userId: number) {
    try {
      await ChatsController.deleteUser(this.id, userId);
      this.users = await ChatsController.getUsers(this.id);
      store.set('users', this.users);
    } catch (err) {
      console.log(err);
    }
  }
}

const controller = new MessagesController();

export default controller;
