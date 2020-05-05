{
    const template = `
        <div>underscore loaded</div>
        <div id="stage"></div>
    `;

    const domParser = new DOMParser();
    const buildItem = (num) => {
        let div = document.createElement("DIV");
        div.appendChild(document.createTextNode(`item - ${num}`));
        return div
    };

    let us = null;

    define = () => {
        customElements.define('eh-load-underscore', class extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({mode: 'open'});
                shadowRoot.innerHTML = template;
                const stage = shadowRoot.querySelector('#stage');
                const fragment = document.createDocumentFragment();
                us.each([1,2,3,4], (num) => {
                    fragment.appendChild(buildItem(num));
                });
                stage.appendChild(fragment)
            }
        });    
    }

    if(typeof window.EHWC === "undefined"){
        window.EHWC = {};
    }

    window.EHWC.loadUnderscore = {
        // underscorejs : 1.10+
        init : (underscore) => {
            us = underscore;
            define();
        }
    }
    
}