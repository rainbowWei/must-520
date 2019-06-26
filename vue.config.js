const path = require('path')

// 配置每个vue文件自动加载 variables.scss mixin.scss 文件
function addStyleResource (rule) {
  rule.use('style-resources')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/scss/variables.scss'),
        path.resolve(__dirname, './src/styles/scss/mixin.scss')
      ],
    })
}

module.exports = {
  chainWebpack: config => {
    console.log(config.module, '8888')
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}
