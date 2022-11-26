import Block from 'core/block';
import registerComponent from './core/helper';
import router from './core/router';
import Input from './components/input';
import Button from './components/button';
import Link from './components/link';
import Tooltip from './components/tooltip';
import Label from './components/label';
import Info from './components/info';
import Header from './components/header';
import Chat from './components/chat';
import ChatCard from './components/chat-card';
import MessageWindow from './components/messages-window';
import MessageInput from './components/message-input';
import Users from './components/users';
import Message from './components/message';
import Login from './pages/login';
import Signin from './pages/signin';
import Settings from './pages/settings';
import Profile from './pages/profile';
import Page404 from './pages/err404';
import Page500 from './pages/err500';
import Chats from './pages/chats';
import AuthController from './controllers/auth';
import ChatsController from './controllers/chats';

registerComponent(Input);
registerComponent(Button);
registerComponent(Link);
registerComponent(Tooltip);
registerComponent(Label);
registerComponent(Info);
registerComponent(Chat as any);
registerComponent(ChatCard);
registerComponent(MessageWindow as any);
registerComponent(Users);
registerComponent(Message);
registerComponent(MessageInput);

window.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  const header: any = new Header();
  root?.before(header.getContent());

  router
    .use('/', Login as typeof Block)
    .use('/log-in', Login as typeof Block)
    .use('/sign-up', Signin as typeof Block)
    .use('/settings', Settings as typeof Block)
    .use('/profile', Profile as typeof Block)
    .use('/404', Page404 as typeof Block)
    .use('/500', Page500 as typeof Block)
    .use('/messenger', Chats as typeof Block);
  router.start();
  const path = window.location.pathname;

  try {
    await AuthController.getUser();
    await ChatsController.getChats();
    router.go(path);
  } catch (e) {
    router.go('/');
  }
});
