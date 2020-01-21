const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const user = require('./api/user')

const app = express();

// package.json > scripts > test 에 환경변수 추가
// 테스트 환경에서 서버로그가 찍히지 않도록 함
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', user)

module.exports = app;