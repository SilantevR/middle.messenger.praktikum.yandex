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
    } catch (err) {
      console.log(err);
    }
  }

  async changePassword(data: ChangePassword) {
    try {
      await this.api.updatePassword(data);
      await Auth.getUser();
      router.go('/settings');
    } catch (err) {
      console.log(err);
    }
  }

  async changeAvatar(formData: FormData) {
    try {
      await this.api.updateAvatar(formData);
      await Auth.getUser();
      router.go('/messenger');
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  async getUserByLogin(login: string) {
    try {
      return this.api.getUserByLogin(login);
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
export default new UserController();
