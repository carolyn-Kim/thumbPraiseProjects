'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _appRun = require('../app.run.js');

var _appRun2 = _interopRequireDefault(_appRun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = (0, _supertest2.default)(_appRun2.default.listen());

describe('测试路由', function () {
    it('点赞', function (done) {
        request.get('/index/update').expect(200).end(function (err, res) {
            if (res.body.success == 1) {
                done();
            } else {
                done(err);
            }
            // console.log(res);
        });
    });
});
