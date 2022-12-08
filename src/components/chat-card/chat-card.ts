const template = `<div id="{{id}}" class="chat" 
    data-title="{{theme}}" data-user ="{{user}}" data-chat="true">
    <div class="chat__container">
      <img alt="Аватар чата" src={{defaultImage}} class="chat__container__image" />
    </div>
    <div class="chat__content">
      <div class="chat__content__theme">
        <p class="chat__content__theme__text">{{theme}}</p>
        <button id={{id}} 
        class="chat__content__theme__close" 
        type="button" 
        data-close="true" name="delete_chat">
          &#10008
        </button>
      </div>
      <div class="chat__content__message">
        <p class="chat__content__message__text">{{message}}</p>
        <div class="chat__content__message__count  
        chat__content__message__count__{{looked}}">{{count}}</div>
      </div>

    </div>
    
  </div>`;

export default template;
