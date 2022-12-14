const template = `<div class="body">
    <h2 class="page__header">Create account</h2>
    <form method="post" name="signin" class="form">
      {{{Label page="signin" type="text" 
      name="email" value="Почта" text="" required="false"}}}
      {{{Label page="signin" type="text" 
      name="login" value="Логин" text="" required="false"}}}
      {{{Label page="signin" type="text" 
      name="first_name" value="Имя" text="" required="false"}}} 
      {{{Label page="signin" type="text" 
      name="second_name" value="Фамилия" text="" required="false"}}} 
      {{{Label page="signin" type="phone" 
      name="phone" value="Телефон" text="" required="false"}}} 
      {{{Label page="signin" type="password" 
      name="password" value="Пароль" text="" required="false"}}} 
      {{{Label page="signin" type="password" 
      name="password" value="Повторите пароль" text="" required="false"}}} 
      {{{Button  page="signin" type="submit" title="Зарегистрироваться"}}}
      {{{Link  page="signin" index="" title="Войти"}}}
    </form>

</div>`;

export default template;
