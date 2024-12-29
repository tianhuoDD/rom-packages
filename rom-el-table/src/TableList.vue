<template>
	<el-table style="width: 100%" scrollbar-always-on :border="false">
		<!-- 用户配置的表格列 -->
		<slot></slot>
		<!-- 最右侧固定的操作列 -->
		<el-table-column v-if="hasOperationsSlot" fixed="right" align="center" label="操作" min-width="120">
			<template #default>
				<slot name="operations">
					<el-button link type="primary" size="small">详情</el-button>
				</slot>
			</template>
		</el-table-column>
	</el-table>
</template>
<script setup>
import { computed, useSlots } from "vue";

// 获取所有插槽
const slots = useSlots();

// 计算是否存在 operations 插槽
const hasOperationsSlot = computed(() => !!slots.operations);
</script>
<style>
.el-table__header .cell {
	color: black;
}
</style>
