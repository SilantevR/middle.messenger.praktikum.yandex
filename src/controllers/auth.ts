import store from '../core/store';
import router from '../core/router';
import Auth, { LoginData, SignupData } from '../api/auth';
import ChatsController from './chats';

class AuthController {
  private api: Auth;

  constructor() {
    this.api = new Auth();
  }

  async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.getUser();
      await ChatsController.getChats();

      router.go('/messenger');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);
      await this.getUser();
      await ChatsController.getChats();

      router.go('/messenger');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async getUser() {
    const user = await this.api.request() as SignupData;

    if (!user?.avatar) {
      user.avatar = 'https://ya-praktikum.tech/api/v2/resources/847107d3-d952-478a-8aa8-71503841a93f/616cb0fd-44ad-4da1-b59b-563a1748c1eb_default_profile_logo.png';
    } else {
      user.avatar = `https://ya-praktikum.tech/api/v2/resources/${user.avatar}`;
    }
    if (!user?.display_name) {
      user.display_name = '';
    }

    store.set('user', user);

    if (user) {
      if (window.location.pathname === '/' || window.location.pathname === '/sign-up') {
        router.go('/messenger');
      }
    } else { router.go('/'); }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set('user', null);
      store.set('chats', []);
      router.go('/');
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new AuthController();
