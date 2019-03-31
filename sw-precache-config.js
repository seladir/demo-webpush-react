module.exports = {
  staticFileGlobs: [],
  stripPrefix: 'build/',
  swFilePath: './build/service-worker.js',
  importScripts: (['./custom-sw.js']),
  handleFetch: false
}
