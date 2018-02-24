'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configs = new Map();
configs.set('port', 3000);
configs.set('staticpath', _path2.default.join(__dirname, '../'));
configs.set('viewspath', _path2.default.join(__dirname, '../views'));
exports.default = configs;