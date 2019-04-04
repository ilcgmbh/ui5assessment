const gulp = require('gulp');
const proxy = require("http-proxy-middleware");
const connect = require('gulp-connect');

gulp.task('server', function () {
    connect.server({
        port: "8088",
        middleware: () => {
            return [proxy(function (pathname) {
                return pathname.match(/(\/\([^\(]\([^\)]+\)\))?\/Northwind/);
            }, {
                target: "https://services.odata.org/V2/Northwind",
                logLevel: "debug",
                pathRewrite: {
                    '^(\/\([^\(]\([^\)]+\)\))?\/Northwind\/': ''    // rewrite path
                },
                changeOrigin: "false"
            })]

        }
    });
});