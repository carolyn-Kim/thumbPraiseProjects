import path from 'path'
const configs = new Map();
configs.set('port',3000);
configs.set('staticpath',path.join(__dirname,'../'));
configs.set('viewspath', path.join(__dirname, '../views'));
export default configs;