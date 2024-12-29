<!-- 这是消息类弹窗 -->
<template>
	<el-dialog v-model="dialogVisible" width="70%">
		<!-- 标题部分-slot -->
		<template #header>
			<slot name="header"></slot>
		</template>
		<!-- 主要内容区域-slot -->
		<el-card shadow="never">
			<div>
				<slot></slot>
			</div>
		</el-card>
		<!-- 按钮操作部分-slot -->
		<template #footer>
			<slot name="footer"></slot>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVModel } from "@vueuse/core";
// 定义 props
const props = defineProps({
	visible: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["update:dialogVisible"]);
const dialogVisible = useVModel(props, "visible", emit);
</script>
<style>
.el-dialog {
	padding: 0 !important;
}
.el-dialog__header {
	padding: 20px;
	border-bottom: 1px solid #dcdfe6;
}
.el-dialog__body {
	padding: 20px;
}
</style>
