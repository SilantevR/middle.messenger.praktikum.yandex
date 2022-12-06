declare const template = "<div class=\"message {{#unless incoming}}message__myself{{/unless}}\">\n    <div class=\"message__text\">{{text}}\n    </div>\n    <div class=\"message__date\">{{date}}</div>\n</div>";
export default template;
