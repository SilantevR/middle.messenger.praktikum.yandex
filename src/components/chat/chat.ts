const template = `<div class="chats__menu__container__wrapper">
  <div class="chats__menu__container__wrapper__list">
    <div class="chat_wrapper">
      {{#if data.chats}}
          {{#each data.chats}}
            <label class="chat">
            {{{ChatCard id=id image=avatar 
              theme=title message=content 
              looked=unread_count count=unread_count}}}
            </label>
            <hr style="border: 1px solid #86868b" />
          {{/each}}
      {{/if}}
    </div>
  </div>
  
</div>`;

export default template;
