
import supertest from 'supertest';
import app from '../app.run.js';
const request = supertest(app.listen())


describe('测试路由', function () {
    it('点赞', function (done) {
        request
            .get('/index/update')
            .expect(200)
            .end(function (err, res) {
                if (res.body.success==1) {
                    done();
                }else{
                    done(err);
                }
                // console.log(res);
                
            })
    });
});
