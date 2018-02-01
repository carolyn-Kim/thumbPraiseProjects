
import indexmodels from "../models/indexmodels";
const indexController={
    init(app,router){
        app.use(router(_=>{
            _.get('/index/index', async (ctx,next)=>{
                ctx.body = await ctx.render('index',{
                    title:'大拇指点赞yeah！'
                })
            });
            _.get('/index/update',async (ctx,next)=>{
                ctx.body=await indexmodels.init();
                
            });
        }))
    }
}
export default indexController;