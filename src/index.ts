import registerComponent from './core/helper';
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
import Message from './components/message';
import Login from './pages/login';
import Signin from './pages/signin';
import Settings from './pages/settings';
import Profile from './pages/profile';
import Page404 from './pages/err404';
import Page500 from './pages/err500';
import Chats from './pages/chats';

registerComponent(Input);
registerComponent(Button);
registerComponent(Link);
registerComponent(Tooltip);
registerComponent(Label);
registerComponent(Info);
registerComponent(Chat);
registerComponent(ChatCard);
registerComponent(MessageWindow);
registerComponent(Message);
registerComponent(MessageInput);

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  const path = window.location.pathname;
  let page: any;
  const header: any = new Header();

  const pages: any = {
    '/': new Login(),
    '': new Login(),
    '/signin': new Signin(),
    '/settings': new Settings(),
    '/profile': new Profile(),
    '/404': new Page404(),
    '/500': new Page500(),
    '/chats': new Chats(),
    default: new Login(),
  };
  if (Object.keys(pages).includes(path)) {
    page = pages[path];
  }

  root?.prepend(header.getContent());
  root?.append(page.getContent());
});
