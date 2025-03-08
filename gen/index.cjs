var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  SitemapXml: () => SitemapXml,
  SitemapXmlIndex: () => SitemapXmlIndex,
  SitemapXmlIndexItem: () => SitemapXmlIndexItem,
  SitemapXmlUrl: () => SitemapXmlUrl
});
module.exports = __toCommonJS(index_exports);
/* *******************************************************
 * sitemapteam6
 *
 * ~ Silent, precise, effective.
 *         No ghost routes. No false intel.
 *               Every URL accounted for.
 *
 * @license
 *
 * Apache-2.0
 *
 * Copyright 2015-2025 Alex Stevovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @meta
 *
 * package_name: sitemapteam6
 * file_name: src/index.js
 * purpose: Core functionality and exports combined.
 *
 * @system
 *
 * generated_on: 2025-03-08T19:18:22.010Z
 * certified_version: 1.0.0
 * file_uuid: 30fe9ec1-c9d9-4c3a-9748-666a698b338c
 * file_size: 9457 bytes
 * file_hash: 1f03232f67fa683fa5d327bcf8cd390ce399ccd9cf0e3229639f6af1102abcfa
 * mast_hash: 9116c0cb5d7b100d0836b9fdb32bbab088a3e83f3bb5852033417b03bdc8872b
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ******************************************************* */
class SitemapXml {
  /**
   * Internal list of URLs in the sitemap.
   * @internal
   * @type {SitemapXmlUrl[]}
   */
  _urls;
  /**
   * Creates a new Sitemap XML instance.
   */
  constructor() {
    this._urls = [];
  }
  /**
   * Adds a new URL entry to the sitemap.
   * @param {string} loc - The URL location.
   * @returns {SitemapXmlUrl} - The sitemap URL entry instance.
   */
  url(loc) {
    const entry = new SitemapXmlUrl(loc);
    this._urls.push(entry);
    return entry;
  }
  /**
   * Generates the sitemap.xml content.
   * @param {Object} [options] - Options for sitemap generation.
   * @param {string} [options.dateFormat='full'] - Format of the date (`full` or `date-only`).
   * @param {boolean} [options.force=false] - Whether to force generation even if empty.
   * @returns {string} - The generated sitemap.xml string.
   * @throws {Error} If sitemap is empty and `force` is not `true`.
   */
  toSitemapXml({ dateFormat = "full", force = false } = {}) {
    if (!force && this._urls.length === 0) {
      throw new Error(
        "Sitemap must have at least one URL. Use `force: true` to override."
      );
    }
    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${this._urls.map((url) => url.toSitemapXml({ dateFormat })).join("")}</urlset>`;
  }
}
class SitemapXmlUrl {
  /**
   * The URL location.
   * @internal
   * @type {string}
   */
  _loc;
  /**
   * Last modified date.
   * @internal
   * @type {Date|null}
   */
  _lastmod;
  /**
   * Change frequency.
   * @internal
   * @type {string|null}
   */
  _changefreq;
  /**
   * Priority of the URL.
   * @internal
   * @type {number|null}
   */
  _priority;
  /**
   * Creates a new Sitemap URL entry.
   * @param {string} loc - The URL location.
   */
  constructor(loc) {
    this._loc = loc;
    this._lastmod = null;
    this._changefreq = null;
    this._priority = null;
  }
  /**
   * Gets the URL location.
   * @returns {string}
   */
  get loc() {
    return this._loc;
  }
  /**
   * Sets the last modification date.
   * @param {Date} date - The last modification date.
   * @returns {this}
   * @throws {Error} If `date` is not a valid Date object.
   */
  lastmod(date) {
    if (!(date instanceof Date))
      throw new Error("lastmod must be a Date object.");
    this._lastmod = date;
    return this;
  }
  /**
   * Sets the change frequency of the URL.
   * @param {'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'} freq - The frequency.
   * @returns {this}
   * @throws {Error} If `freq` is not a valid frequency value.
   */
  changefreq(freq) {
    const validFreqs = [
      "always",
      "hourly",
      "daily",
      "weekly",
      "monthly",
      "yearly",
      "never"
    ];
    if (!validFreqs.includes(freq))
      throw new Error(`Invalid changefreq value: ${freq}`);
    this._changefreq = freq;
    return this;
  }
  /**
   * Sets the priority of the URL.
   * @param {number} value - A number between `0.0` and `1.0`.
   * @returns {this}
   * @throws {Error} If `value` is not within the valid range.
   */
  priority(value) {
    if (typeof value !== "number" || value < 0 || value > 1) {
      throw new Error("priority must be a number between 0.0 and 1.0.");
    }
    this._priority = value;
    return this;
  }
  /**
   * Generates the XML representation of the sitemap entry.
   * @param {Object} [options] - Options for XML generation.
   * @param {string} [options.dateFormat='full'] - Format of the date (`full` or `date-only`).
   * @returns {string} - The XML string.
   */
  toSitemapXml({ dateFormat = "full" } = {}) {
    let xml = `<url><loc>${this._loc}</loc>`;
    if (this._lastmod) {
      const formattedDate = dateFormat === "date-only" ? this._lastmod.toISOString().split("T")[0] : this._lastmod.toISOString();
      xml += `<lastmod>${formattedDate}</lastmod>`;
    }
    if (this._changefreq)
      xml += `<changefreq>${this._changefreq}</changefreq>`;
    if (this._priority !== null)
      xml += `<priority>${this._priority.toFixed(1)}</priority>`;
    xml += `</url>`;
    return xml;
  }
}
class SitemapXmlIndex {
  /**
   * Internal list of sitemaps.
   * @internal
   * @type {SitemapXmlIndexItem[]}
   */
  _sitemaps;
  /**
   * Creates a new Sitemap Index instance.
   */
  constructor() {
    this._sitemaps = [];
  }
  /**
   * Adds a new sitemap entry to the index.
   * @param {string} loc - The sitemap location.
   * @returns {SitemapXmlIndexItem} - The sitemap index entry instance.
   */
  sitemap(loc) {
    const entry = new SitemapXmlIndexItem(loc);
    this._sitemaps.push(entry);
    return entry;
  }
  /**
   * Generates the sitemap index XML content.
   * @param {Object} [options] - Options for XML generation.
   * @param {string} [options.dateFormat='full'] - Format of the date.
   * @param {boolean} [options.force=false] - Whether to force generation.
   * @returns {string} - The sitemap index XML string.
   * @throws {Error} If index is empty and `force` is not `true`.
   */
  toSitemapIndexXml({ dateFormat = "full", force = false } = {}) {
    if (!force && this._sitemaps.length === 0) {
      throw new Error(
        "Sitemap index must have at least one sitemap. Use `force: true` to override."
      );
    }
    return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${this._sitemaps.map((sitemap) => sitemap.toSitemapIndexXml({ dateFormat })).join("")}</sitemapindex>`;
  }
}
class SitemapXmlIndexItem {
  /**
   * The location of the sitemap.
   * @internal
   * @type {string}
   */
  _loc;
  /**
   * The last modification date.
   * @internal
   * @type {Date|null}
   */
  _lastmod;
  /**
   * Creates a new Sitemap Index Item.
   * @param {string} loc - The sitemap location.
   */
  constructor(loc) {
    this._loc = loc;
    this._lastmod = null;
  }
  /**
   * Gets the sitemap location.
   * @returns {string}
   */
  get loc() {
    return this._loc;
  }
  /**
   * Sets the last modification date.
   * @param {Date} date - The last modification date.
   * @returns {this}
   * @throws {Error} If `date` is not a valid Date object.
   */
  lastmod(date) {
    if (!(date instanceof Date))
      throw new Error("lastmod must be a Date object.");
    this._lastmod = date;
    return this;
  }
  /**
   * Generates the sitemap index item XML content.
   * @param {Object} [options] - Options for XML generation.
   * @param {string} [options.dateFormat='full'] - Format of the date.
   * @returns {string} - The sitemap index item XML string.
   * @throws {Error} If index is empty and `force` is not `true`.
   */
  toSitemapIndexXml({ dateFormat = "full" } = {}) {
    let xml = `<sitemap><loc>${this._loc}</loc>`;
    if (this._lastmod) {
      const formattedDate = dateFormat === "date-only" ? this._lastmod.toISOString().split("T")[0] : this._lastmod.toISOString();
      xml += `<lastmod>${formattedDate}</lastmod>`;
    }
    xml += `</sitemap>`;
    return xml;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SitemapXml,
  SitemapXmlIndex,
  SitemapXmlIndexItem,
  SitemapXmlUrl
});
