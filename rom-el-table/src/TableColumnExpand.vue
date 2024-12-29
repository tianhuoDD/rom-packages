<template>
	<el-table-column type="expand" fixed>
		<template #default="{ row }">
			<div class="expanded-content">
				<!-- 检查 prop 和 label 的长度是否一致 -->
				<template v-if="isValid">
					<el-row :gutter="20">
						<el-col v-for="(label, index) in labels" :key="index" class="expanded-item" :span="8">
							<span class="label">{{ label }}:&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span class="value">{{ row[props[index]] }}</span>
						</el-col>
					</el-row>
				</template>
				<div v-else>
					<p>prop 和 label 的长度不一致，请检查传入的数据。</p>
				</div>
			</div>
		</template>
	</el-table-column>
</template>

<script setup>
import { computed } from "vue";

// 定义组件接收的 props
const propsDef = defineProps({
	prop: {
		type: Array,
		required: true,
	},
	label: {
		type: Array,
		required: true,
	},
});

// 解构 props
const props = propsDef.prop;
const labels = propsDef.label;

// 计算 prop 和 label 数组是否长度一致
const isValid = computed(() => props.length === labels.length);
</script>

<style scoped>
.expanded-content {
	padding: 10px;
}
.expanded-item {
	margin-bottom: 10px;
}
.label {
	color: #99a9bf;
	font-size: 14px;
	font-weight: 700;
}
</style>
