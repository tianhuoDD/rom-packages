/**
 * global.d.ts — 这个文件位于components包的根目录，
 * 用于给vscode的volar插件提示我们组件的属性的类型
 */

declare module "vue" {
	export interface GlobalComponents {
		RomElDialog: (typeof import("./src/DialogItem.vue"))["default"];
	}

	interface ComponentCustomProperties {}
}

export {};
