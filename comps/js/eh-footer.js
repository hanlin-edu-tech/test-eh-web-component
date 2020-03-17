{
    const template = `
            <link rel="stylesheet" href="./comps/css/eh-footer.css">
            <footer>
                <div class="footer-top">
                    <div class="item">
                        <ul>
                            <li>免費諮詢專線</li>
                            <li>0800-0088-11</li>
                            <li>fb line</li>
                        </ul>
                    </div>
                    <div class="item">
                        <ul>
                            <li>服務時間</li>
                            <li>星期一至五 | 9:00至21:00</li>
                            <li>星期六/日及國定假日 | 休息</li>
                        </ul>
                    </div>
                    <div class="item">
                        <ul>
                            <li>
                                <a href="#">課程使用方法</a>
                            </li>
                            <li>
                                <a href="#">講義加購</a>
                            </li>
                            <li>
                                <a href="#">勘誤啟事</a>
                            </li>
                        </ul>
                    </div>
                    <div class="item">
                        <ul>
                            <li>
                                <a href="#">聯絡我們</a>
                            </li>
                            <li>
                                <a href="#">關於我們</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>如欲購買雲端學院課程請至線上課程購買、前往各經銷據點或來電  0800-0088-11<br>Copyright c 2013 eHanlin Inc. 保留一切權利使用條款 隱私權政策 </p>
                </div>
            </footer>
            
    `;
    
    customElements.define('eh-footer', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }
    });

}
