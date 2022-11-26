import Auth from './auth';
import router from '../core/router';
import { SignupData } from '../api/auth';
import User, { ChangePassword } from '../api/user';

class UserController {
  private api: User;

  constructor() {
    this.api = new User();
  }

  async update(data: SignupData) {
    try {
      await this.api.updateData(data);
      await Auth.getUser();

      router.go('/settings');
    } catch (e) {
      console.error(e);
    }
  }

  async changePassword(data: ChangePassword) {
    try {
      await this.api.updatePassword(data);
      await Auth.getUser();
      router.go('/settings');
    } catch (e) {
      console.error(e);
    }
  }

  async changeAvatar(formData: FormData) {
    await this.api.updateAvatar(formData);
    await Auth.getUser();
    router.go('/profile');
  }

  async getUserByLogin(login: string) {
    return this.api.getUserByLogin(login);
  }
}
export default new UserController();
