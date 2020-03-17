{
    const template = `
            <link rel="stylesheet" href="./comps/css/eh-navbar.css">
            <nav>
                <a href="/index.html" class="navbar-brand">
                    <img class="logo" src="https://www.ehanlin.com.tw/images/ehanlin_logo.svg"/></a>
                <div class="navbar-content">
                    <ul>
                        <li>
                            <a href="#" class="nav-link"> 免費試用</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"> 課程總覽</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"> 課程開通</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"> 升學專區</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link"> 活動專區</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                                <img class="icon icon-chart" src="./img/chart.png" alt="chart"></img>
                            </a>
                            <a href="#" class="nav-link">
                                <img class="icon icon-mail" src="./img/mail.png" alt="mail"></img>
                            </a>
                        </li>
                        <li>
                            <div class="user">
                                <img class="head" src="./img/head.png" alt="head"></img>
                            </div>
                        </li>
                    </ul>
                
            </nav>
    `;

    customElements.define('eh-navbar', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }
    });

}
