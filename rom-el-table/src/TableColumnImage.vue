<!-- TableColumnImage.vue -->
<template>
	<el-table-column>
		<!-- 使用作用域插槽获取当前行的数据 -->
		<template #default="{ row }">
			<el-image
				:style="{ width: size + 'px', height: size + 'px' }"
				:src="row[src]"
				:preview-src-list="[row[src]]"
				fit="fill"
				hide-on-click-modal
				preview-teleported
			/>
		</template>
	</el-table-column>
</template>

<script setup>
const props = defineProps({
	/**
	 * 数据对象中图片字段的名称，例如 'img'
	 */
	prop: {
		type: String,
		required: true,
	},
	/**
	 * 图片大小
	 */
	size: {
		type: Number,
		default: 30,
	},
});
const src = props.prop;
</script>
