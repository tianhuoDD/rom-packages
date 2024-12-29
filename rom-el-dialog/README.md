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
