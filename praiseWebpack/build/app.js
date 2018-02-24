"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _indexcontroller = require("./controller/indexcontroller");

var _indexcontroller2 = _interopRequireDefault(_indexcontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaStatic2.default)(_config2.default.get("staticpath")));

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewspath'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    wath: true,
    writeBody: false
}));

_indexcontroller2.default.init(app, _koaSimpleRouter2.default);

app.listen(_config2.default.get('port'), function () {
    console.log('server is running ...');
});

exports.default = app;