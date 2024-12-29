/**
 * global.d.ts — 这个文件位于components包的根目录，
 * 用于给vscode的volar插件提示我们组件的属性的类型
 */

declare module "vue" {
	export interface GlobalComponents {
		RomTableList: (typeof import("../src/TableList.vue"))["default"];
		RomTableList2: (typeof import("../src/TableList2.vue"))["default"];
	}

	interface ComponentCustomProperties {}
}

export {};
