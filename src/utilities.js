/* @flow */
const BASIC_MARKDOWN_CHARS = /[*_`]/g;
const URL_MARKDOWN_CHARS = /\)/g;
const QUOTATIONS = /"/g;

/**
 * Escape chars (*, _) that have meaning in markdown so that they aren't interpreted as part of the markdown
 * @param {string} text - the text to be replaced.
 * @returns {string}
*/
export function encodeContent(text: string) {
  return text.replace(BASIC_MARKDOWN_CHARS, '\\$&');
}

/**
 * Encode chars that would normally be allowed in a URL but would conflict with
 * our markdown syntax: `[foo](http://foo/)`
 * @param {string} url The url to be encoded.
 * @returns {string}
*/
export function encodeURL(url: string) {
  return url.replace(URL_MARKDOWN_CHARS, '%29');
}

/**
 * Escape quotes using backslash
 * @param {string} text The string to be escaped
 * @returns {string}
*/
export function escapeTitle(text: string) {
  return text.replace(QUOTATIONS, '\\"');
}
