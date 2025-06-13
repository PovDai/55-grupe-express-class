import { PageTemplate } from "./PageTemplate.js";

export class PageError extends PageTemplate{
    constructor() {
        super();

    }
    footer() {
        return `  <footer> &copy; 2025-Povilas-ERROR-FOOTER</footer>`
    }

}