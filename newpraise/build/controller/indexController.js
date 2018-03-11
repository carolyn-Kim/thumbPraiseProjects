'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModels = require('../models/indexModels');

var _indexModels2 = _interopRequireDefault(_indexModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index/index', async function (ctx, next) {
                ctx.body = await ctx.render('index', {
                    title: '大拇指点赞！'
                });
            });
            _.get('/index/update', async function (ctx, next) {
                ctx.body = await _indexModels2.default.init();
            });
            _.get('/index/star', async function (ctx, next) {
                if (ctx.request.header['x-pjax']) {
                    ctx.body = "<x-star></x-star>";
                } else {
                    ctx.body = await ctx.render('star', {
                        title: '星星点赞！'
                    });
                }
            });
            _.get('/index/praise', async function (ctx, next) {
                if (ctx.request.header['x-pjax']) {
                    ctx.body = "<x-praise></x-praise>";
                } else {
                    ctx.body = await ctx.render('index', {
                        title: '大拇指点赞！'
                    });
                }
            });
            _.get('/index/ad', async function (ctx, next) {
                ctx.body = '<div style="height: 150px;background: orange;">我是广告啊！～</div>';
            });
        }));
    }
};

exports.default = indexController;