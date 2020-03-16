# 按钮组件

<demo-block>
:::slot source
<button-test1></button-test1>
:::
这是一个按钮

::: slot highlight
```html
<div class="row">
  <wzw-button>默认按钮</wzw-button>
  <wzw-button type="warning">警告按钮</wzw-button>
  <wzw-button type="danger">危险按钮</wzw-button>
  <wzw-button type="success">成功按钮</wzw-button>
  <wzw-button type="primary">主要按钮</wzw-button>
  <wzw-button type="info">信息按钮</wzw-button>
  <wzw-button type="info" icon="wode">信息</wzw-button>
  <wzw-button type="primary" icon="diqu" iconPosition="right">信息</wzw-button>
  <wzw-button type="primary" loading>信息</wzw-button>
  <wzw-button type="warning">警告按钮 <i class="wzw-icon-wode"></i> </wzw-button>
</div>
```
:::
</demo-block>