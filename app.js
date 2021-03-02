//express-router를 사용하기 위한 모듈들
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
//app->router 호출
const app = express();
const sample = require('./routes/sample');
//app 입출력 값 및 cors설정
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//router 주소 할당
app.use('/sample', sample);

module.exports.handler = serverless(app);