## Rom-El-Dialog 说明

> 该组件基于 Vue + Element Plus 实现的弹窗组件

### 已完成的功能

1. `DialogMessage`: 显示文本类弹窗

### 使用方法

1. 需要安装依赖

```json
{
	"element-plus": ">=2.8.8",
	"vue": ">=3.0.0",
	"@vueuse/core": ">=12.0.0"
}
```

2. 引入

```js
// 初始化 vue
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
// 引入 element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);
// 挂载 app
app.mount("#app");
```

3. 使用

```vue
<template>
	<el-button @click="openDialog">打开弹窗</el-button>
	<rom-dialog-message v-model="dialogVisible" title="复制淘宝、天猫、京东、苏宁">
		<p>生成的商品默认是没有上架的，请手动上架商品！</p>
		<p>
			商品采集设置：设置 > 系统设置 > 第三方接口设置 >
			采集商品配置（如配置一号通采集，请先登录一号通账号，无一号通，请选择99Api设置）
		</p>
	</rom-dialog-message>
</template>
<script setup>
import { DialogMessage as RomDialogMessage } from "@rom/el-dialog";
import { ref } from "vue";
const dialogVisible = ref(false);
const openDialog = () => {
	dialogVisible.value = true;
};
</script>
```
