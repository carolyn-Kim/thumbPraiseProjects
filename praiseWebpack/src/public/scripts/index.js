'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(num, ele) {
        _classCallCheck(this, PraiseButton);

        this.num = num;
        this.ele = ele;
    }

    _createClass(PraiseButton, [{
        key: 'clickFn',
        value: function clickFn() {
            var f = this.throttle(this.fundo, 1000);
            this.ele.click(function () {
                f();
            });
        }
    }, {
        key: 'fundo',
        value: function fundo() {
            if (this.num < 10) {
                this.ele.parent().css('-webkit-filter', 'grayscale(0)');
                $('#counter').css('display', 'inline-block');
                setTimeout(function () {
                    $('#counter').css('display', 'none');
                }, 1000);
                axios.get('/index/update').then(function (response) {
                    console.log(response);
                }).catch(function (err) {
                    console.log(err);
                });
                this.num = add(this.num);
            } else {
                this.ele.parent().css('-webkit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
        }
    }, {
        key: 'throttle',
        value: function throttle(func, wait) {

            var context = this,
                args = arguments,
                results = void 0;

            //setTimeout的handler
            var timeout = null;
            //标记时间戳-上一次执行回调的时间戳
            var previous = 0;
            var later = function later() {
                previous = 0;
                timeout = null;
                results = func.apply(context, args);
            };

            return function () {
                var now = new Date().getTime();
                if (!previous) {
                    previous = now;
                }
                //距离下次触发的等待时间
                var remaining = wait - (now - previous);
                // console.log(remaining);
                if (remaining <= 0 || remaining >= wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }

                    previous = now;
                    results = func.apply(context, args);
                }
                return results;
            };
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(num, ele) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, ele));
    }

    return Thumb;
}(PraiseButton);

exports.Thumb = Thumb;
/* let res = new Thumb(0, $('#hand'));
res.clickFn(); */
