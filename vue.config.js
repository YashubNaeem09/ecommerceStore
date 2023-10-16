const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://fakestoreapi.com', 
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false, 
      },
    },
  },
};


