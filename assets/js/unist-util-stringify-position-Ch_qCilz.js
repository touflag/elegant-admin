
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function o(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?t(n.position):"start"in n||"end"in n?t(n):"line"in n||"column"in n?i(n):""}function i(n){return r(n&&n.line)+":"+r(n&&n.column)}function t(n){return i(n&&n.start)+"-"+i(n&&n.end)}function r(n){return n&&typeof n=="number"?n:1}export{o as s};