// 所有src目录外的资源,都必须重新启动应用才能加载。

//module.exports -发布一个模型配置

module.exports = {
    devServer: {  //devServer - 服务器配置
        proxy: {  //proxy - 代理配置
            // 当请求Vue项目路径以/api开头时转发给下面
            //当请求Vue项目路径以/api开头时转发给下面
            '/api':{ // 'api' - 自定义的一个路径前缀。随便定义。
                // 服务器端URL
                target: 'http://localhost:8081', //被代理的服务器地址
                ws:true,
                pathRewrite:{  // pathRewrite - 请求地址重写
                    // 把路径中api去掉
                    // /api/demo -> /demo
                    '^/api':''    //使用正则重写地址。'^/api' -以/api开头的地址 -> ''删除/api,其余部分不变
                },
                changeOrigin: true //跨域请求

            }
        }
    }
}