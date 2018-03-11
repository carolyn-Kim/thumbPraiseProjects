import indexModels from "../models/indexModels";

const indexController={
    init(app,router){
        app.use(router(_ => {
            _.get('/index/index',async (ctx, next) => {
                ctx.body = await ctx.render('index',{
                    title:'大拇指点赞！'
                })
            });
            _.get('/index/update',async (ctx,next)=>{
                ctx.body = await indexModels.init();
            });
            _.get('/index/star',async (ctx,next)=>{
                if(ctx.request.header['x-pjax']){
                    ctx.body = "<x-star></x-star>"
                }else{
                    ctx.body = await ctx.render('star', {
                        title: '星星点赞！'
                    })
                }
                
            });
            _.get('/index/praise', async (ctx, next) => {
                if (ctx.request.header['x-pjax']) {
                    ctx.body = "<x-praise></x-praise>"
                } else {
                    ctx.body = await ctx.render('index', {
                        title: '大拇指点赞！'
                    })
                }
            });
            _.get('/index/ad',async (ctx,next)=>{
                ctx.body = '<div style="height: 150px;background: orange;">我是广告啊！～</div>'
            })
        }))
    }
}

export default indexController;