import path from "path";
const config=new Map();

config.set('port',3000);
config.set('staticPath',path.join(__dirname,'../'));
config.set('viewsPath',path.join(__dirname,'../views/'));

export default config;