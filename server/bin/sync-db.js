// node bin/sync-db.js 실행시 
// models.js파일에서 지정한 db.sqlite 데이타베이스 파일이 생성되는 것을 확인 할 수 있다.

const models = require('../models')

module.exports = () => {
  // 데이타베이스와 싱크
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false
  }
  return models.sequelize.sync(options)
}