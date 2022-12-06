declare const template = "<div class=\"body\">\n  <h2 class=\"page__header\">Your account</h2>\n  <form method=\"post\" name=\"settings\" class=\"form\"> \n    <div class=\"account__information\">\n      {{{Info field=\"\u041F\u043E\u0447\u0442\u0430\" value=email}}}\n      {{{Info field=\"\u041B\u043E\u0433\u0438\u043D\" value=login}}}\n      {{{Info field=\"\u0418\u043C\u044F\" value=first_name}}} \n      {{{Info field=\"\u0424\u0430\u043C\u0438\u043B\u0438\u044F\" value=second_name}}} \n      {{{Info field=\"\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435\" value=display_name}}} \n      {{{Info field=\"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\" value=phone}}} \n      {{{Info field=\"\u041F\u0430\u0440\u043E\u043B\u044C\" value=\"****\"}}} \n    </div>\n      <div class = \"account__change__container\">\n  <img\n    alt=\"\u0410\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\"\n    src=\"{{avatar}}\"\n    class=\"profile__logo\"\n  />\n\n  <div class=\"account__buttons\">\n    {{{Link  page=\"account\" index=\"settings\" title=\"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435\"}}}\n    <form method=\"post\" name=\"photo\" class=\"account__link\">\n      <label class=\"account__link__button  button\">\n        <input id=\"avatar\" style=\"display: none;\" type=\"file\" name=\"file\" accept=\"image/*\">\t\t\n        <span>\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u043E\u0442\u043E</span>\n      </label>\n    </form>\n    {{{Button  page=\"account\" type=\"reset\" title=\"\u0412\u044B\u0439\u0442\u0438\"}}}\n  </div>\n</div>\n  </form>\n</div>";
export default template;
