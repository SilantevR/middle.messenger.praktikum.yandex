import Chats from '../api/chats';
import store from '../core/store';

class ChatsController {
  private api: Chats;

  constructor() {
    this.api = new Chats();
  }

  async addChat(title: string) {
    try {
      await this.api.createChat(title);
      const chats = await this.api.chats();
      store.set('chats', chats);
    } catch (err) {
      console.log(err);
    }
  }

  async removeChat(id: string) {
    try {
      await this.api.deleteChat(id);
      const chats = await this.api.chats();
      store.set('chats', chats);
      store.set('messages', [{
        content: 'Выберите чат',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        user_id: true,
      }]);
      store.set('users', []);
    } catch (err) {
      console.log(err);
    }
  }

  async getChats() {
    try {
      const chats = await this.api.chats();
      store.set('chats', chats);
      store.set('messages', [{
        content: 'Выберите чат',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        user_id: true,
      }]);
    } catch (err) {
      console.log(err);
    }
  }

  async updateChat(chatId: number, userId: number) {
    try {
      await this.api.addUser(chatId, userId);
    } catch (err) {
      console.log(err);
    }
  }

  async getUsers(chatId: number) {
    try {
      return this.api.chatUsers(chatId);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async deleteUser(chatId: number, userId: number) {
    try {
      return this.api.deleteUser(chatId, userId);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async chatToken(id: number) {
    try {
      const token = await this.api.chatToken(id);
      return token;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export default new ChatsController();
