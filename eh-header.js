{
    //<a id="test">購物車</a> 不會被 #test 選中
    const template = `
        <style>
        :host {
            width: 100%;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .logo {
            width: 304px;
            height: 30px;
        }
        nav {
           color: #6b6b6b;
           margin-right: 20px;
        }
        </style>
        <header>
            <a href="/index.html"><img class="logo" src="https://www.ehanlin.com.tw/images/ehanlin_logo.svg"/></a>
            <nav>
                <a id="test">購物車</a> | <a>課程開通</a> | <a>免費試用</a> | <a>使用幫手</a>
            </nav>
        </header>
    `;

    customElements.define('eh-header', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }
    });

}
