const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/home",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7217',
        secure: false
    });

    app.use(appProxy);
};
