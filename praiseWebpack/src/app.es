import Koa from "koa"; 
import router from "koa-simple-router";
import render from "koa-swig";
import co from "co";
import configs from "./config/config";
import staticfiles from "koa-static";
import indexController from "./controller/indexcontroller";


let app = new Koa();


app.use(staticfiles(configs.get("staticpath")));

app.context.render = co.wrap(render({
    root:configs.get('viewspath'),
    autoescape:true,
    cache:'memory',
    ext:'html',
    wath:true,
    writeBody: false
}));


indexController.init(app,router);

app.listen(configs.get('port'),()=>{
    console.log('server is running ...');
})

export default app;