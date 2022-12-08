const template = `<div class="body">
    <h2 class="page__header">Edite account</h2>
    <div class="page__container">
    <form method="post" name="settings" class="form form_settings"> 
      {{{SettingsLabel page="signin" type="text" 
      name="email" value=email text="" required="true"}}}
      {{{SettingsLabel page="signin" type="text" 
      name="login" value=login text="" required="true"}}}
      {{{SettingsLabel page="signin" type="text" 
      name="first_name" value=first_name text="" required="true"}}} 
      {{{SettingsLabel page="signin" type="text" 
      name="second_name" value=second_name text="" required="true"}}} 
      {{{SettingsLabel page="signin" type="text" 
      name="display_name" value=display_name text="" required="true"}}} 
      {{{SettingsLabel page="signin" type="phone" 
      name="phone" value=phone text="" required="true"}}} 
      {{{Button  page="settings" type="submit" title="Редактировать"}}} 
      {{{Button  page="login" type="reset" title="Выйти"}}} 
    </form>
    <form method="post" name="password" class="form form_password"> 
      {{{Label page="settings" type="password" 
      name="oldPassword" value="Старый пароль" text="" required="false"}}} 
      {{{Label page="settings" type="password" 
      name="newPassword" value="Новый пароль" text="" required="false"}}} 
      {{{Button  page="settings" type="submit" title="Изменить пароль"}}}
    </form>
    </div>

</div>`;

export default template;
