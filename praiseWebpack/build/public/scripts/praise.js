webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var thumb = new _index.Thumb();
var timer = '';
xtag.register('x-praise', {
    content: '<div class="hand-bg">' + '<div class="hand" id="hand">' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="palm"></div>' + '<div class="arm"></div>' + '</div>' + '<span id="counter">+1</span>' + '</div>',
    lifecycle: {
        created: function created() {
            this.xtag._num = 0;
        }
    },
    methods: {
        praise: function praise() {
            if (this.xtag._num < 10) {
                $(this.childNodes).css('-webkit-filter', 'grayscale(0)');
                $('#counter').css('display', 'inline-block');
                setTimeout(function () {
                    $('#counter').css('display', 'none');
                }, 1000);
                thumb.clickFn();
                this.xtag._num = add(this.xtag._num);
            } else {
                $(this.childNodes).css('-webkit-filter', 'grayscale(1)');
                this.xtag._num = 0;
            }
            console.log(this.xtag._num);
        }
    },
    events: {

        click: function click(e) {
            var _this = this;

            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                _this.praise();
            }, 1000);
        }
    }
});

/***/ })

},[4]);