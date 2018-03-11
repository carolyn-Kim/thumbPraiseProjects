'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexModels = {
    init: function init() {
        var options = {
            uri: 'http://localhost/praiseData/praiseupdate.php',
            method: 'GET'
        };

        return new Promise(function (resolve, reject) {
            (0, _requestPromise2.default)(options).then(function (result) {
                var res = JSON.parse(result);
                if (res) {
                    resolve({ success: res.data });
                } else {
                    reject({});
                }
            });
        });
    }
};

exports.default = indexModels;