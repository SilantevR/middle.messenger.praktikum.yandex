declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.hbs' {
    import { TemplateDelegate } from 'handlebars';

    const template: TemplateDelegate;
    export default template;
}

declare module 'handlebars/dist/handlebars.runtime' {
    import * as Handlebars from 'handlebars';

    export default Handlebars;
}
