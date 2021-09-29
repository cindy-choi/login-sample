const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('setupProxy');

module.exports = function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://192.168.100.84:8888',
            changeOrigin: true,
        })
    );
};
