module.exports = {
    publicPath:'./',
    // baseUrl:'./',.
    lintOnSave: false,

    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:4000', // string | Object
        before: app => {}
    }
};

// login(data) {
        //     return axios.post('/api/login', data);
        //          http://yapi.demo.qunar.com/mock/24076/api/login
        // },
        // proxy = {
        //     "/api": {
        //         target: "http://yapi.demo.qunar.com",
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/api": "/mock/24076/api" // rewrite path
        //         }
        //     }
        // }, // string | Object
