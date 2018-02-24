import {Thumb} from './index.es'
const thumb = new Thumb();
let timer = '';
xtag.register('x-praise', {
    content: '<div class="hand-bg">' +
        '<div class="hand" id="hand">' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="palm"></div>' +
        '<div class="arm"></div>' +
        '</div>' +
        '<span id="counter">+1</span>' +
        '</div>',
    lifecycle: {
        created: function () {
            this.xtag._num = 0;
        }
    },
    methods: {
        praise: function () {
            if (this.xtag._num < 10) {
                $(this.childNodes).css('-webkit-filter', 'grayscale(0)')
                $('#counter').css('display', 'inline-block');
                setTimeout(() => {
                    $('#counter').css('display', 'none');
                }, 1000);
                thumb.clickFn();
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
                this.praise();
            }, 1000)

        }
    }
});