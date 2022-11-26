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
    } catch (e) {
      console.error(e);
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
    } catch (e) {
      console.error(e);
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
    } catch (e) {
      console.log(e);
    }
  }

  async updateChat(chatId: number, userId: number) {
    await this.api.addUser(chatId, userId);
  }

  async getUsers(chatId: number) {
    return this.api.chatUsers(chatId);
  }

  async deleteUser(chatId: number, userId: number) {
    return this.api.deleteUser(chatId, userId);
  }

  async chatToken(id: number) {
    const token = await this.api.chatToken(id);
    return token;
  }
}

export default new ChatsController();
