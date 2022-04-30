const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/app',
    createProxyMiddleware({
      target: 'http://localhost:5555',
      changeOrigin: true,
    })
  );
};