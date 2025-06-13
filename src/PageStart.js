import { PageTemplate } from "./PageTemplate.js ";

export class PageStart extends PageTemplate{
    constructor() {
        super()
        this.page = 'other'
        this.foot = false;
    }

}