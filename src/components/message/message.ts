const template = `<div class="message {{#unless incoming}}message__myself{{/unless}}">
    <div class="message__text">{{text}}
    </div>
    <div class="message__date">{{date}}</div>
</div>`;

export default template;
