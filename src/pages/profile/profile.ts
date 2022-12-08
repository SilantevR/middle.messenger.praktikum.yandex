/* eslint-disable no-tabs */
const template = `<div class="body">
  <h2 class="page__header">Your account</h2>
  <form method="post" name="settings" class="form"> 
    <div class="account__information">
      {{{Info field="Почта" value=email}}}
      {{{Info field="Логин" value=login}}}
      {{{Info field="Имя" value=first_name}}} 
      {{{Info field="Фамилия" value=second_name}}} 
      {{{Info field="Имя в чате" value=display_name}}} 
      {{{Info field="Телефон" value=phone}}} 
      {{{Info field="Пароль" value="****"}}} 
    </div>
      <div class = "account__change__container">
  <img
    alt="Аватар пользователя"
    src="{{avatar}}"
    class="profile__logo"
  />

  <div class="account__buttons">
    {{{Link  page="account" index="settings" title="Изменить данные"}}}
    <form method="post" name="photo" class="account__link">
      <label class="account__link__button  button">
        <input id="avatar" style="display: none;" type="file" name="file" accept="image/*">		
        <span>Изменить фото</span>
      </label>
    </form>
    {{{Button  page="account" type="reset" title="Выйти"}}}
  </div>
</div>
  </form>
</div>`;

export default template;
