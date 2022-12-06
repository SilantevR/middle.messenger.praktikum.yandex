const template = `<div class="body">
    <h2 class="page__header">Please enter to your account</h2>
    <form method="post" name="login" class="form">      
        {{{Label page="login" type="text" name="login" 
        value="Логин" text="" required="false"}}}
        {{{Label page="login" type="password" name="password" 
        value="Пароль" text="" required="false"}}}
        {{{Button  page="login" type="submit" title="Войти"}}}
        {{{Link  page="login" index="sign-up" title="Зарегистрироваться"}}}
    </form>
</div>`;

export default template;
