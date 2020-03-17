{
    //<a id="test">購物車</a> 不會被 #test 選中
    const template = `
        <style>
        :host {
            width: 236px;
            height: 272px;
            border-radius: 5px;
            overflow: hidden;
            background-color: white;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
            position: relative;
            margin: 6px 12px;
        }
        ::slotted(.card-tracker) {
            position: absolute;
            background-color: transparent;
            z-index: 10;
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }
        .cardup:hover .card-more {
            opacity: 1;
        }
        .detail-teacher:hover.card-more {
            opacity: 0;
        }
        .card-child {
            height: 45%;
            transition: 0.3s;
            position: relative;
        }
        .cardup {
            height: 152px;
        }
        .carddown {
            height: 120px;
        }
        .card-italic-tag {
            position: absolute;
            top: 5px;
            left: -25px;
            width: 84px;
            height: 24px;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            line-height: 24px;
            transform: rotate(-45deg);
            background-color: #FD9841;
            color: #fff;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
            z-index: 30;
        }
        .card-grade-tag {
            position: absolute;
            top: 7px;
            right: 5px;
            height: 18px;
            padding: 0px 6px 0px 6px;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            line-height: 18px;
            border-radius: 3px;
            background-color: #454545;
            color: #fff;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
            z-index: 30;
        }
        .card-img {
            width: 100%;
            height: 100%;
        }
        ::slotted(img) {
            width: 100%;
        }
        .card-more {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 0;
            z-index: 50;
            transition: 0.3s;
        }
        .more-add-cart, ::slotted(.more-see-more) {
            display: block;
            width: 140px;
            padding: 12px 0px;
            color: #fff;
            margin: 6px auto;
            text-align: center;
            border-radius: 5px;
            text-decoration: none;
        }
        .more-add-cart {
            transition: 0.2s;
            background-color: #FD9841;
        }
        .more-add-cart:hover {
            background-color: #F28121;
        }
        ::slotted(.more-see-more) {
            transition: 0.2s;
            background-color: #0D6CBE;
        }
        ::slotted(.more-see-more:hover) {
            background-color: #065DA7;
        }
        .card-details {
            position: relative;
            height: 100%;
            margin: 0px 12px 0px 12px;
        }
        ::slotted(.details-title), ::slotted(.details-teacher) {
            position: relative;
            display: block;
            text-decoration: none;
            z-index: 20;
            transition: 0.3s;
        }
        ::slotted(.details-title){
            font-size: 18px;
            font-weight: 500;
            color: #454545;
            padding-top: 8px;
        }
        ::slotted(.details-title:hover) {
            color: #000000;
        }
        ::slotted(.details-teacher) {
            display: inline-block;
            margin-top: 8px;
            font-size: 12px;
            color: #8b8b8b;
        }
        ::slotted(.details-teacher:hover) {
            color: #0D6CBE;
        }
        .card-supplement {
            position: absolute;
            width: 100%;
            bottom: 12px;
            display: flex;
            justify-content: space-between;
        }
        .supplement-exp {
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index: 30;
            font-size: 12px;
            display: inline-block;
            text-decoration: none;
            padding: 4px 8px;
            background-color: #dddddd;
            color: #8b8b8b;
            border-radius: 6px;
            transition: 0.3s;
        }
        .supplement-exp:hover {
            background-color: #d2d2d2;
        }
        .supplement-price {
            position: absolute;
            right: 0px;
            bottom: 0px;
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 1px;
            color: #0D6CBE;
            text-align: right;
            transition: 0.3s;
        }
        @media (max-width: 767px) {
            :host, .card {
                display: flex;
                width: 100%;
                height: 110px;
            }
            .card-child {
                height: 100%;
            }
            .cardup {
                box-sizing: border-box;
                padding: 12px 0px 12px 12px;
            }
            .carddown {
                width: 100%;
            }
            .card-more {
                display: none;
            }
            .card-grade-tag {
                position: absolute;
                top: auto;
                bottom: 18px;
            }
            .card-img {
                width: auto;
                height: 100%;
                border-radius: 3px;
                overflow: hidden;
            }
            ::slotted(img) {
                width: auto;
                height: 100%;
            }
            .details-title {
                font-size: 16px;
            }
            .supplement-price {
                font-size: 18px;
            }
        }
        </style>
        <div class="card">
            <slot name="card-tracker"></slot>
            <div class="card-child cardup">
                <div class="card-img">
                    <slot name="courses-img"></slot>
                </div>
                <div class="card-italic-tag"><slot name="italic-tag">標籤</slot></div>
                <div class="card-grade-tag"><slot name="grade-tag">年段</slot></div>
                <div class="card-more">
                    <a class="more-add-cart" href="#addcart">加入購物車</a>
                    <slot name="more-see-more">了解更多</slot>
                </div>
            </div>
            <div class="card-child carddown">
                <div class="card-details">
                    <slot name="courses-name">課程名稱</slot>
                    <slot name="teacher">團隊名稱</slot>
                    <div class="card-supplement">
                        <div class="supplement-price"><slot name="price">價格</slot></div>
                </div>
            </div>
            </div>
        </div>
    `;

    customElements.define('eh-courses-card', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }
    });

}
