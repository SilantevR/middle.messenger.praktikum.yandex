import Handlebars from 'handlebars';
import Block from '../../core/block';
import withStore from '../../core/withStore';
import template from './profile';
import AuthController from '../../controllers/auth';
import UserController from '../../controllers/user';
import { StateData } from '../chats/index';

export class ProfileBase extends Block {
  constructor(data: StateData) {
    super({
      ...data.user,
      events: {
        click: (e: MouseEvent) => {
          const element = e.target as HTMLButtonElement;
          if (element?.type === 'reset') {
            AuthController.logout();
          }
        },
        change: (e: MouseEvent) => {
          const input = e.target as HTMLInputElement;
          const { files } = input;
          if (files) {
            const formData = new FormData();
            formData.append('avatar', files[0]);

            UserController.changeAvatar(formData);
          }
        },

      },
    });
  }

  _init() {
    AuthController.getUser();
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
const withUser = withStore((state: any) => (state));

const Profile = withUser(ProfileBase);

export default Profile;
