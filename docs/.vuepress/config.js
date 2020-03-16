
module.exports = {
  title: 'wzw-ui', //设置网站标题
  description: 'ui 库', // 描述
  dest: './build', // 设置输出目录
  port: 1234, // 端口
  themeConfig: { // 主配置文件
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: {
      '/components/': [{
        collapsable: true,
        children: [
          'button'
        ]
      }]
    }
  }
}