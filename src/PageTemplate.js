

export class PageTemplate {
    constructor() {
        this.page = 'default'
        this.foot = true;
    }
    head() {
        return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/static/css/main.css">`
    }
    header() {
        return `
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/start">Start</a>
            <a href="/end">End</a>
            <a href="/*error" >404</a>
        </nav>
        </header>
        `};
    main() {
        return  `<main>Content</main> `
    };
    maindif() {
        return `<main><h1>Cia yra start main </h1>  </main> `
    }

    footer() {
        return `  <footer> &copy; 2025-Povilas-class-express</footer>`
    };
    footerEnd() {
        return `  <footer> &copy; 2025-Povilas-Start-FOOTER</footer>`
    }

    render() {
        return `<!DOCTYPE html>
<html lang="en">
    ${this.head() }
<body>
     ${this.header()}
    ${this.page==='default'? this.main():this.maindif()}
   ${this.foot ? this.footer():this.footerEnd()};
</body>
</html>`
    }
}