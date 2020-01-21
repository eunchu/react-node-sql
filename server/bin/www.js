const app = require('../index')
const syncDb = require('./sync-db')

syncDb().then(_ => {
  console.log('Sync database! 😎')
  app.listen(3000, () => console.log('server started on 3000!'))
})