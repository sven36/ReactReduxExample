


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

// //, {
//       microdata: microdata,
//       mydata: {
//         nick: 'server render body'
//       }
//     }
