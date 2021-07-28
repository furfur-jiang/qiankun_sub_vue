module.exports = {
    devServer:{
        port:888,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack:{
        output:{
            library:'vueApp',
            libraryTarget:'umd'
        }
    }
}