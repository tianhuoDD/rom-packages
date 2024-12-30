## Rom-El-Table 说明

> 该组件基于 Vue + Element Plus 实现的表格组件

### 已完成的功能

1. `TableList`: 显示表格
2. `TableColumnMessage`: 消息列表格；展示超过指定宽度的描述
3. `TableColumnImage`: 图片列表格；展示图片
4. `TableColumnExpand`: 拓展列表格；展示更多的信息

### 使用方法

1. 需要安装依赖

```json
{
	"element-plus": ">=2.8.8",
	"vue": ">=3.0.0"
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
	<rom-table-list :data="tableData">
		<!-- 扩展信息列 -->
		<table-column-expand :prop="expandProps" :label="expandLabels" />
		<!-- 图片列 -->
		<table-column-image prop="img" label="图片" size="50" />
		<!-- 描述信息列 -->
		<table-column-message prop="address" label="Address" width="120" />
		<!-- 操作列 -->
		<template #operations>
			<el-button type="primary">test</el-button>
		</template>
	</rom-table-list>
</template>
<script setup>
import { ref } from "vue";
import { TableList as RomTableList, TableColumnMessage, TableColumnImage, TableColumnExpand } from "@rom/el-table";

// 定义扩展信息的 prop 和 label
const expandProps = ref(["date", "name", "address", "img"]);
const expandLabels = ref(["日期", "名称", "地址", "图片"]);

const tableData = [
	{
		date: "2016-05-04888",
		name: "Aleyna Kutzner",
		address: "魔小宅24骨复古折叠雨伞男女晴雨两用黑胶防晒遮阳全自动太阳伞双人大号 24龙骨自动雨伞米白",
		img: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
	},
];
</script>
```
