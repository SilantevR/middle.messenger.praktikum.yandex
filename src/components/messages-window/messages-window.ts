const template = `<div class="messages__window">
  <div class="chat__users">
    {{#if data.users}}
      {{#each data.users}}
        {{{Users id=id login=login}}}
      {{/each}}
    {{/if}}
  </div>

  {{#if data.messages}}
      {{#each data.messages}}
        {{{Message text=content date=time incoming=user_id}}}
      {{/each}}
  {{/if}}
</div>`;

export default template;
