const template = `<div class="{{name}}_lable {{page}}_lable">
  {{{SettingsInput page=page type=type name=name value=value}}}
  {{{Tooltip input=name text=text required=required pattern=name}}}
</div>`;

export default template;
