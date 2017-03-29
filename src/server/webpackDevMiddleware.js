/* @flow */
import MemoryFS from 'memory-fs'
import webpack from 'webpack'

const watchWebpackBundle: (Object) => Promise<Object> = (compiler) => {
  return new Promise((resolve, reject) => {
    compiler.watch({}, (err, stats) => {
      if (err) {
        console.error(err.stack || err)
        if (err.details) {
          console.error(err.details)
        }
        reject(err)
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        console.error(info.errors)
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings)
      }

      resolve(stats)
    })
  })
}

const webpackDevMiddleware = (config: Object) => {
  const fs = new MemoryFS()
  const compiler = webpack(config)
  compiler.outputFileSystem = fs
  const webpackCompilationPromise = watchWebpackBundle(compiler)

  return async (ctx: Object, next: ?(() => Promise<*>)) => {
    const stats = await webpackCompilationPromise

    console.log(stats.toString({
      color: true,
      chunks: false
    }))

    ctx.state.webpack = webpack
    ctx.state.webpackStats = stats
    ctx.state.webpackFS = fs

    next && await next()
  }
}

export default webpackDevMiddleware
