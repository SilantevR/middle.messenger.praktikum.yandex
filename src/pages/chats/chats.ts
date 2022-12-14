const template = `<div class="body">
  <div class="chats">
      <div class="chats__menu">
        <div class="chats__menu__container">
            <form method="post" name="add_user" class="add__chat__form">
              {{{Label page="chats__menu__container__search add_user" 
              type="search" name="login" value="Логин пользователя" 
              text="" required="false"}}}
              {{{Button  page="add_user" type="submit" title="Пригласить в чат"}}}
            </form>
            {{{Chat}}} 
            <form method="post" name="add_chat" class="add__chat__form">
              {{{Label page="add_chat" type="text" name="chat_name" 
              value="Название чата" text="" required="false"}}}
              {{{Button  page="add_chat" type="submit" title="Создать чат"}}}
            </form>
        </div>
        <div class="chats__menu__profile">
          <div class="chats__menu__profile__container">
            <img alt="Аватар пользователя" src="{{user.avatar}}" 
            class="chats__menu__profile__container__image"/>
          </div>
          <div class="chats__menu__profile__link">
            <a href="./profile" class="chats__menu__profile__link__text">Ваш профиль</a>
          </div>
        </div>
      </div>
      <div class="chats__messages">
          <div class="chats__messages__wrapper__window">
              {{{MessagesWindow}}}
          </div>
          <div class="chats__messages__wrapper">
            <form method="post" name="message" class="chats__messages__wrapper__form">
              {{{Button  page="message" type="submit" title="Отправить"}}}
              {{{MessageInput page="message" type="textarea" name="message" 
              value="Введите текст сообщения" text="" required="false"}}}
            </form>
          </div>
      </div> 
  </div>
  
</div>`;

export default template;
