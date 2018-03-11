import {Star} from './index.es'
import "./add.js";
import "../styles/style.css";

const star = new Star();
let timer = '';
xtag.register('x-star', {
    content: `<div class="star-bg">
            <div class="star" id="star">
            </div>
            <span id="counter">+1</span>
            </div>`,
    lifecycle: {
        created: function () {
            this.xtag._num = 0;
        }
    },
    methods: {
        star: function () {
            if (this.xtag._num < 10) {
                $(this.childNodes).css('-webkit-filter', 'grayscale(0)')
                $('#counter').css('display', 'inline-block');
                setTimeout(() => {
                    $('#counter').css('display', 'none');
                }, 1000);
                star.clickFn();
                this.xtag._num = add(this.xtag._num);

            } else {
                $(this.childNodes).css('-webkit-filter', 'grayscale(1)')
                this.xtag._num = 0;
            }
            console.log(this.xtag._num);
        }
    },
    events: {

        click: function (e) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                this.star();
            }, 1000)

        }
    }
});