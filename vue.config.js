module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                    // target:'https://abc.selfmakers.com:443',
                     target:'http://39.107.99.164:8001',
                    // target:'https://localhost:443',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    productionSourceMap:false,
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}