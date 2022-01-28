/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @ts-check

/**
 * @param {string} html
 * @returns {string} svelte code
 */
export default function htmlToSvelte(html) {
  return `{@html \`${html.replace(/([`$])/g, "\\$1")}\`}`;
}
