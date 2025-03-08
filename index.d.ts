declare module "index" {
    /**
     * Represents a sitemap XML document.
     */
    export class SitemapXml {
        /**
         * Internal list of URLs in the sitemap.
         * @internal
         * @type {SitemapXmlUrl[]}
         */
        _urls: SitemapXmlUrl[];
        /**
         * Adds a new URL entry to the sitemap.
         * @param {string} loc - The URL location.
         * @returns {SitemapXmlUrl} - The sitemap URL entry instance.
         */
        url(loc: string): SitemapXmlUrl;
        /**
         * Generates the sitemap.xml content.
         * @param {Object} [options] - Options for sitemap generation.
         * @param {string} [options.dateFormat='full'] - Format of the date (`full` or `date-only`).
         * @param {boolean} [options.force=false] - Whether to force generation even if empty.
         * @returns {string} - The generated sitemap.xml string.
         * @throws {Error} If sitemap is empty and `force` is not `true`.
         */
        toSitemapXml({ dateFormat, force }?: {
            dateFormat?: string;
            force?: boolean;
        }): string;
    }
    /**
     * Represents a single URL entry in a sitemap.
     */
    export class SitemapXmlUrl {
        /**
         * Creates a new Sitemap URL entry.
         * @param {string} loc - The URL location.
         */
        constructor(loc: string);
        /**
         * The URL location.
         * @internal
         * @type {string}
         */
        _loc: string;
        /**
         * Last modified date.
         * @internal
         * @type {Date|null}
         */
        _lastmod: Date | null;
        /**
         * Change frequency.
         * @internal
         * @type {string|null}
         */
        _changefreq: string | null;
        /**
         * Priority of the URL.
         * @internal
         * @type {number|null}
         */
        _priority: number | null;
        /**
         * Gets the URL location.
         * @returns {string}
         */
        get loc(): string;
        /**
         * Sets the last modification date.
         * @param {Date} date - The last modification date.
         * @returns {this}
         * @throws {Error} If `date` is not a valid Date object.
         */
        lastmod(date: Date): this;
        /**
         * Sets the change frequency of the URL.
         * @param {'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never'} freq - The frequency.
         * @returns {this}
         * @throws {Error} If `freq` is not a valid frequency value.
         */
        changefreq(freq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"): this;
        /**
         * Sets the priority of the URL.
         * @param {number} value - A number between `0.0` and `1.0`.
         * @returns {this}
         * @throws {Error} If `value` is not within the valid range.
         */
        priority(value: number): this;
        /**
         * Generates the XML representation of the sitemap entry.
         * @param {Object} [options] - Options for XML generation.
         * @param {string} [options.dateFormat='full'] - Format of the date (`full` or `date-only`).
         * @returns {string} - The XML string.
         */
        toSitemapXml({ dateFormat }?: {
            dateFormat?: string;
        }): string;
    }
    /**
     * Represents a sitemap index document.
     */
    export class SitemapXmlIndex {
        /**
         * Internal list of sitemaps.
         * @internal
         * @type {SitemapXmlIndexItem[]}
         */
        _sitemaps: SitemapXmlIndexItem[];
        /**
         * Adds a new sitemap entry to the index.
         * @param {string} loc - The sitemap location.
         * @returns {SitemapXmlIndexItem} - The sitemap index entry instance.
         */
        sitemap(loc: string): SitemapXmlIndexItem;
        /**
         * Generates the sitemap index XML content.
         * @param {Object} [options] - Options for XML generation.
         * @param {string} [options.dateFormat='full'] - Format of the date.
         * @param {boolean} [options.force=false] - Whether to force generation.
         * @returns {string} - The sitemap index XML string.
         * @throws {Error} If index is empty and `force` is not `true`.
         */
        toSitemapIndexXml({ dateFormat, force }?: {
            dateFormat?: string;
            force?: boolean;
        }): string;
    }
    /**
     * Represents a sitemap index entry.
     */
    export class SitemapXmlIndexItem {
        /**
         * Creates a new Sitemap Index Item.
         * @param {string} loc - The sitemap location.
         */
        constructor(loc: string);
        /**
         * The location of the sitemap.
         * @internal
         * @type {string}
         */
        _loc: string;
        /**
         * The last modification date.
         * @internal
         * @type {Date|null}
         */
        _lastmod: Date | null;
        /**
         * Gets the sitemap location.
         * @returns {string}
         */
        get loc(): string;
        /**
         * Sets the last modification date.
         * @param {Date} date - The last modification date.
         * @returns {this}
         * @throws {Error} If `date` is not a valid Date object.
         */
        lastmod(date: Date): this;
        /**
         * Generates the sitemap index item XML content.
         * @param {Object} [options] - Options for XML generation.
         * @param {string} [options.dateFormat='full'] - Format of the date.
         * @returns {string} - The sitemap index item XML string.
         * @throws {Error} If index is empty and `force` is not `true`.
         */
        toSitemapIndexXml({ dateFormat }?: {
            dateFormat?: string;
        }): string;
    }
}
