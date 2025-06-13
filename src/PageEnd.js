import { PageTemplate } from "./PageTemplate.js"

export class PageEnd extends PageTemplate {

    constructor() {
        super();
    }
    main() {
        return `<main><h1 class="red">Cia yra END main </h1>  </main> `
    }

}