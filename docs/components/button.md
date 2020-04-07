# Button 按钮
<div>常用的操作按钮。</div>

### 基础用法
<p>基础的按钮用法。</p>

<demo-block>
:::slot source
<button-test1></button-test1>
:::
使用 <code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。

::: slot highlight
```html
<div class="row">
    <wzw-button>默认按钮</wzw-button>
    <wzw-button type="primary">主要按钮</wzw-button>
    <wzw-button type="success">成功按钮</wzw-button>
    <wzw-button type="info">信息按钮</wzw-button>
    <wzw-button type="warning">警告按钮</wzw-button>
    <wzw-button type="danger">危险按钮</wzw-button>
  </div>
  <div class="row">
    <wzw-button plain>朴素按钮</wzw-button>
    <wzw-button type="primary" plain>主要按钮</wzw-button>
    <wzw-button type="success" plain>成功按钮</wzw-button>
    <wzw-button type="info" plain>信息按钮</wzw-button>
    <wzw-button type="warning" plain>警告按钮</wzw-button>
    <wzw-button type="danger" plain>危险按钮</wzw-button>
  </div>
  <div class="row">
    <wzw-button round>圆角按钮</wzw-button>
    <wzw-button type="primary" round>主要按钮</wzw-button>
    <wzw-button type="success" round>成功按钮</wzw-button>
    <wzw-button type="info" round>信息按钮</wzw-button>
    <wzw-button type="warning" round>警告按钮</wzw-button>
    <wzw-button type="danger" round>危险按钮</wzw-button>
  </div>
  <div class="row">
    <wzw-button icon="wzw-icon-search" circle></wzw-button>
    <wzw-button type="primary" icon="wzw-icon-edit" circle></wzw-button>
    <wzw-button type="success" icon="wzw-icon-check" circle></wzw-button>
    <wzw-button type="info" icon="wzw-icon-message" circle></wzw-button>
    <wzw-button type="warning" icon="wzw-icon-star-off" circle></wzw-button>
    <wzw-button type="danger" icon="wzw-icon-delete" circle></wzw-button>
  </div>
```
:::
</demo-block>

### 禁用状态
<p>按钮不可用状态。</p>

<demo-block>
:::slot source
<button-test2></button-test2>
:::
你可以使用 <code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。

::: slot highlight
```html
<div class="row">
    <wzw-button disabled>默认按钮</wzw-button>
    <wzw-button type="primary" disabled>主要按钮</wzw-button>
    <wzw-button type="success" disabled>成功按钮</wzw-button>
    <wzw-button type="info" disabled>信息按钮</wzw-button>
    <wzw-button type="warning" disabled>警告按钮</wzw-button>
    <wzw-button type="danger" disabled>危险按钮</wzw-button>
  </div>
  <div class="row">
    <wzw-button plain disabled>朴素按钮</wzw-button>
    <wzw-button type="primary" plain disabled>主要按钮</wzw-button>
    <wzw-button type="success" plain disabled>成功按钮</wzw-button>
    <wzw-button type="info" plain disabled>信息按钮</wzw-button>
    <wzw-button type="warning" plain disabled>警告按钮</wzw-button>
    <wzw-button type="danger" plain disabled>危险按钮</wzw-button>
  </div>
```
:::
</demo-block>

### 文字按钮
<p>没有边框和背景色的按钮。</p>

<demo-block>
:::slot source
<button-test3></button-test3>
:::

::: slot highlight
```html
<div class="row">
  <wzw-button type="text">文字按钮</wzw-button>
  <wzw-button type="text" disabled>文字按钮</wzw-button>
</div>
```
:::
</demo-block>

### 图标按钮
<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>

<demo-block>
:::slot source
<button-test4></button-test4>
:::
设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。
::: slot highlight
```html
<div class="row">
    <wzw-button type="primary" icon="el-icon-edit"></wzw-button>
    <wzw-button type="primary" icon="el-icon-share"></wzw-button>
    <wzw-button type="primary" icon="el-icon-delete"></wzw-button>
    <wzw-button type="primary" icon="el-icon-search">搜索</wzw-button>
    <wzw-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></wzw-button>
  </div>
```
:::
</demo-block>

### 按钮组
<p>以按钮组的方式出现，常用于多项类似操作。</p>

<demo-block>
:::slot source
<button-test5></button-test5>
:::
使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。
::: slot highlight
```html
<div class="row">
  <wzw-button-group>
    <wzw-button type="primary" icon="wzw-icon-arrow-left">上一页</wzw-button>
    <wzw-button type="primary">下一页<i class="wzw-icon-arrow-right wzw-icon--right"></i></wzw-button>
  </wzw-button-group>
  <wzw-button-group style="margin-left:20px;">
    <wzw-button type="primary" icon="wzw-icon-edit"></wzw-button>
    <wzw-button type="primary" icon="wzw-icon-share"></wzw-button>
    <wzw-button type="primary" icon="wzw-icon-share"></wzw-button>
    <wzw-button type="primary" icon="wzw-icon-delete"></wzw-button>
  </wzw-button-group>
</div>
```
:::
</demo-block>

### 加载中
<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>

<demo-block>
:::slot source
<button-test6></button-test6>
:::
要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。
::: slot highlight
```html
<wzw-button type="primary" :loading="true">加载中</wzw-button>
```
:::
</demo-block>

### 不同尺寸
<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>

<demo-block>
:::slot source
<button-test7></button-test7>
:::
额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。
::: slot highlight
```html
<div class="row">
  <wzw-button>默认按钮</wzw-button>
  <wzw-button size="medium">中等按钮</wzw-button>
  <wzw-button size="small">小型按钮</wzw-button>
  <wzw-button size="mini">超小按钮</wzw-button>
</div>
<div class="row">
  <wzw-button round>默认按钮</wzw-button>
  <wzw-button size="medium" round>中等按钮</wzw-button>
  <wzw-button size="small" round>小型按钮</wzw-button>
  <wzw-button size="mini" round native-type="reset">超小按钮</wzw-button>
</div>
```
:::
</demo-block>

### Attributes