import proxy from 'http-proxy-middleware';

export default (app) => {
  app.use(
    proxy('/users', {
      target: 'http://172.20.10.13:3000/'
    })
  )
}