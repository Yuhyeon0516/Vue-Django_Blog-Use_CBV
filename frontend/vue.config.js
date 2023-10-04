const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: ['vuetify'],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            staticOptions: {
                index: 'home.html',
            },
        },
    },
    outputDir: 'dist',
    publicPath: '/',
    assetsDir: 'static',
    pages: {
        home: {
            template: 'public/index.html',
            entry: 'src/pages/main_home.js',
            filename: 'home.html',
            title: 'VueDjangoPhoto/home.html',
            minify: false,
        },
        post_list: {
            template: 'public/index.html',
            entry: 'src/pages/main_post_list.js',
            filename: 'post_list.html',
            title: 'VueDjangoPhoto/post_list.html',
            minify: false,
        },
        post_detail: {
            template: 'public/index.html',
            entry: 'src/pages/main_post_detail.js',
            filename: 'post_detail.html',
            title: 'VueDjangoPhoto/post_detail.html',
            minify: false,
        },
    },
});
