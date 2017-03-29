/* @flow */
import Koa from 'koa'
import config from '../../config/webpack.config.dev'
import webpackDevMiddleware from './webpackDevMiddleware'

const app = new Koa()

app.use(webpackDevMiddleware(config))

app.use(ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)
console.info('Universal React App listening on http://0.0.0.0:3000')

export default app
