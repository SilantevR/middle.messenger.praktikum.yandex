declare const template = "<div class=\"messages__window\">\n  <div class=\"chat__users\">\n    {{#if data.users}}\n      {{#each data.users}}\n        {{{Users id=id login=login}}}\n      {{/each}}\n    {{/if}}\n  </div>\n\n  {{#if data.messages}}\n      {{#each data.messages}}\n        {{{Message text=content date=time incoming=user_id}}}\n      {{/each}}\n  {{/if}}\n</div>";
export default template;
