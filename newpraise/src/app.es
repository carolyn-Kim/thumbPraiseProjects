import koa from "koa";
import router from "koa-simple-router";
import co from "co";
import config from "./config/config";
import staticFiles from "koa-static";
import render from "koa-swig";
import indexController from "./controller/indexController";

let app= new koa();

app.use(staticFiles(config.get('staticPath')));

app.context.render=co.wrap(render({
    root:config.get('viewsPath'),
    autoescape:true,
    cache:'memory',
    ext:'html',
    wath:true,
    writeBody:false
}));

indexController.init(app,router);

app.listen(config.get('port'),()=>{
    console.log('server is running...');
})