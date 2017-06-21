const koa = require('koa');
const koaRouter = require('koa-router');
const path = require('path');
const reactview = require('./app/plugin/reactview/app.js');
const Static = require('./app/middleware/static.js');
const VERSION = require('./app/assets/package.json').version;
const https=require('https');
const querystring=require('querystring');
const crypto = require('crypto');
const fs = require('fs');

const Sign = (jsonObj) => {
  let array = Object.keys(jsonObj).sort();
  let res = 'c5205611a0939282b3d72dac5f4383b1', result = '';
  for (let prop in array) {
    res += array[prop] + obj[array[prop]];
  }
  result = crypto.createHash('md5').update(res,'utf8').digest('hex');
  return result;
}
let obj = {};
obj.appkey = 'ElectricitySystem';
obj.timeStamp = Date.now();//'1497256868';
obj.methodName = "fileservice.getErRecordDataById";
obj.format = "json";
obj.fileId = '51BF9B6B27EE544AE0533B00A8C0B511';
const sign = Sign(obj);
const serect = 'c5205611a0939282b3d72dac5f4383b1';
obj.sign = sign;

const res =querystring.stringify(obj); //GetErRecordDataById(obj);
const url='openapi.fesco.com.cn';

const options = { 
hostname: url, 
port: 443, 
path:'/downloaDfileTest',
method: 'POST',
headers:{
  'Content-Type':'application/x-www-form-urlencoded',
  'Content-Length':res.length
}
}; 
// let req= https.request(options,(res)=>{
//   let imgData;
// res.on('data',(chunk)=>{
//   imgData=chunk;
// });
// res.on('end',()=>{
// let base64='data:image/jpg;base64,'+imgData.toString('base64');
// });
// res.on('error',(err)=>{
//   console.log(err);
// });
// });
// req.write(res);

const App = () => {
  let app = koa();
  let router = koaRouter();
  let microdata = {
    styleDomain: "//localhost:3000/assets/",
    styleVersion: VERSION,
  };

  // 初始化 /home 路由 dispatch 的 generator
  router.get(['/', '/home'], function* () {
    // 执行 view 插件
    this.body = this.render('Home', {
      microdata: microdata,
      mydata: {
        nick: 'server render body'
      }
    }, true);
  });

  router.get('/device/:deviceID', function* () {
    // 执行 view 插件
    let deviceID = this.params.deviceID;
    this.body = this.render('Device', {
      isServer: true,
      microdata: microdata,
      mydata: {
        path: this.path,
        deviceID: deviceID,
      },
    }, false);
  });
  router.post('uploadFile',function* (){
    

  });

  app.use(router.routes()).use(router.allowedMethods());

  // 静态资源托管
  app.use(Static({
    staticOpts: {
      router: '/assets',               // 路由映射
      dir: `${__dirname}/app/assets`,  // 托管的目录
      maxage: 0,        // 设置 maxage，默认缓存一天
    },
    app: app,
  }));

  // 注入 reactview
  const viewpath = path.join(__dirname, 'app/views');

  app.config = {
    reactview: {
      viewpath: viewpath,             // the root directory of view files
      doctype: '<!DOCTYPE html>',
      extname: '.js',                 // view 层直接渲染文件名后缀
      beautify: true,                 // 是否需要对 DOM 结构进行格式化
      writeResp: false,               // 是否需要在 view 层直接输出
    },
  }
  reactview(app);

  return app;
};

const createApp = () => {
  const app = App();

  app.listen(3000, () => {
    console.log('3000 is listening!');
  });

  return app;
};

createApp();
