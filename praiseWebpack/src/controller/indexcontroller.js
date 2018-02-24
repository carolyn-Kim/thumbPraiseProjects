'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexmodels = require('../models/indexmodels');

var _indexmodels2 = _interopRequireDefault(_indexmodels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index/index', async function (ctx, next) {
                ctx.body = await ctx.render('index', {
                    title: '大拇指点赞yeah！'
                });
            });
            _.get('/index/update', async function (ctx, next) {
                ctx.body = await _indexmodels2.default.init();
            });
        }));
    }
};
exports.default = indexController;
