import { siteConfig } from "../config";

/**
 * 颜色工具：主题色直接由 siteConfig.themeColor.color 提供，不再通过色相派生。
 * CSS 变量 --theme-color 即由此得到，其他颜色变量通过 color-mix() 派生。
 */

/** 返回站点配置的主题色（颜色字符串，如 "#8B1A2B"） */
export function resolveThemeColor(): string {
	return siteConfig.themeColor.color;
}
