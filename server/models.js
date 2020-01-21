const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
})

// sequelize.define(테이블명, 테이블 속성) : 모델정의
const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = {
  Sequelize,
  sequelize,
  User
}